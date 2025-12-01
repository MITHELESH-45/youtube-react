import { useEffect, useState } from "react";
import { Youtube_API_KEY } from "../constants";

export const useFetchChannelDetails = (channelId) => {
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    if (!channelId) return;

    const fetchChannel = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${Youtube_API_KEY}`
        );

        const data = await res.json();
        setChannel(data.items[0]);

      } catch (err) {
        console.error("Failed to fetch channel details", err);
      }
    };

    fetchChannel();
  }, [channelId]);

  return channel;
};
