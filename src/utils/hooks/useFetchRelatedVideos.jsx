import { useEffect, useState } from "react";
import { Youtube_API_KEY } from "../constants";

export const useFetchRelatedVideos = (title) => {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    if (!title) return;

    const fetchRelated = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(
            title
          )}&maxResults=22&key=${Youtube_API_KEY}`
        );

        const data = await res.json();
        
        setVideos(data.items || []);
      } catch (err) {
        console.error("Failed to fetch related videos", err);
      }
    };

    fetchRelated();
  }, [title]);
  
  return videos;
};
