import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Youtube_API_KEY } from "../utils/constants";
import SearchResultCard from "./SearchResultCard";

const SearchResults = () => {
  const [params] = useSearchParams();

  const query = params.get("q");

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchSearchVideos() {
      const data = await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" +
          query +
          "&key="+Youtube_API_KEY
      );
      const json = await data.json();
      console.log(json);

      setVideos(json.items);
    }

    fetchSearchVideos();
  }, [query]);

  return (
    <div className="p-4">
      {videos.slice(1).map((video) => (
        
        <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
          <SearchResultCard info={video} logo={videos[0].snippet.thumbnails}/>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
