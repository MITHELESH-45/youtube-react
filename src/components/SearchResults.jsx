import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Youtube_API_KEY } from "../utils/constants";
import SearchResultCard from "./SearchResultCard";

const SearchResults = () => {
  const [params] = useSearchParams();
  const query = params.get("q");

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    async function fetchSearchResults() {
      setLoading(true);
      setError(null);

      try {
        // ✅ 1. SEARCH API (snippet only – expensive)
        const searchRes = await fetch(
          "https://youtube.googleapis.com/youtube/v3/search?" +
            "part=snippet&type=video&maxResults=20&q=" +
            query +
            "&key=" +
            Youtube_API_KEY
        );

        if (!searchRes.ok) {
          throw new Error(
            "YouTube API error: " + searchRes.status
          );
        }

        const searchJson = await searchRes.json();
        const searchItems = searchJson.items || [];

        if (searchItems.length === 0) {
          setVideos([]);
          return;
        }

        // ✅ 2. Collect IDs
        const videoIds = searchItems.map(
          (item) => item.id.videoId
        );

        const channelIds = searchItems.map(
          (item) => item.snippet.channelId
        );

        // ✅ 3. Fetch video statistics (cheap)
        const statsRes = await fetch(
          "https://youtube.googleapis.com/youtube/v3/videos?" +
            "part=statistics&id=" +
            videoIds.join(",") +
            "&key=" +
            Youtube_API_KEY
        );

        const statsJson = await statsRes.json();

        const statsMap = {};
        statsJson.items?.forEach((item) => {
          statsMap[item.id] = item.statistics;
        });

        // ✅ 4. Fetch channel logos (cheap)
        const channelRes = await fetch(
          "https://youtube.googleapis.com/youtube/v3/channels?" +
            "part=snippet&id=" +
            channelIds.join(",") +
            "&key=" +
            Youtube_API_KEY
        );

        const channelJson = await channelRes.json();

        const channelMap = {};
        channelJson.items?.forEach((channel) => {
          channelMap[channel.id] =
            channel.snippet.thumbnails.default.url;
        });

        // ✅ 5. Merge data
        const enrichedVideos = searchItems.map(
          (video) => ({
            ...video,
            statistics: statsMap[video.id.videoId],
            channelLogo:
              channelMap[video.snippet.channelId],
          })
        );

        setVideos(enrichedVideos);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    }

    fetchSearchResults();
  }, [query]);

  
  if (loading) {
    return <div className="p-4">Loading results…</div>;
  }

  if (error) {
    return (
      <div className="p-4 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="p-4">
      {videos.length === 0 && (
        <p>No results found</p>
      )}

      {videos.map((video) => (
        <Link
          key={video.id.videoId}
          to={"/watch?v=" + video.id.videoId}
        >
          <SearchResultCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
