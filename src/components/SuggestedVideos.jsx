import { Link } from "react-router-dom";
import { useFetchRelatedVideos } from "../utils/hooks/useFetchRelatedVideos";

const SuggestedVideos = ({ title }) => {

  const videos = useFetchRelatedVideos(title);
  
  return (
    <div className="h-40 my-5 shadow-lg">
      {videos.slice(1).map(video => (
        <Link
          key={video.id.videoId}
          to={`/watch?v=${video.id.videoId}`}
          className="flex gap-3 mb-4 cursor-pointer"
        >
          <img
            className="w-50 h-30 rounded-lg"
            src={video.snippet.thumbnails.medium.url}
            alt=""
          />

          <div>
            <p className="font-semibold line-clamp-2">
              {video.snippet.title}
            </p>
            <p className="text-sm text-gray-600">
              {video.snippet.channelTitle}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SuggestedVideos;
