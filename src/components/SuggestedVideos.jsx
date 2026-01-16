import { Link } from "react-router-dom";
import { useFetchRelatedVideos } from "../utils/hooks/useFetchRelatedVideos";

const SuggestedVideos = ({ title }) => {

  const videos = useFetchRelatedVideos(title);

  return (
    <div className="w-full">
      {videos.slice(1).map(video => (
        <Link
          key={video.id.videoId}
          to={`/watch?v=${video.id.videoId}`}
          className="flex gap-2 mb-3 cursor-pointer hover:bg-gray-100 p-1 rounded-lg transition-colors"
        >
          <div className="flex-shrink-0 w-40 md:w-32 lg:w-40 aspect-video relative">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              src={video.snippet.thumbnails.medium.url}
              alt=""
            />
          </div>

          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm line-clamp-2 leading-snug text-black">
              {video.snippet.title}
            </p>
            <p className="text-xs text-gray-600 mt-1">
              {video.snippet.channelTitle}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SuggestedVideos;
