import { useEffect, useState } from "react";
import { Youtube_API_KEY } from "../constants";

export const useFetchVideoDetails = (videoId) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (!videoId) return;

    const fetchVideo = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${Youtube_API_KEY}`
        );
        const data = await res.json();
        setVideo(data.items[0]);
      } catch (err) {
        console.error("Failed to fetch video details", err);
      }
    };

    fetchVideo();
  }, [videoId]);

  return video;
};
