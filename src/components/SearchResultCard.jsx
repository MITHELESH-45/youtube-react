import { formatViews, timeAgo } from "../utils/helper";

const SearchResultCard = ({ info }) => {

  const { snippet, channelLogo, statistics } = info;
  const { title, thumbnails, channelTitle, description, publishedAt } = snippet;
  const time = timeAgo(publishedAt);

  const viewsOrginal = statistics?.viewCount;

  const views = viewsOrginal ? formatViews(viewsOrginal) : 0;

  return (
    <div className="flex flex-col md:flex-row my-4 p-2 md:p-3 cursor-pointer hover:bg-gray-100 rounded-xl transition-colors">
      <div className="w-full md:w-80 lg:w-96 flex-shrink-0">
        <img
          className="w-full rounded-xl aspect-video object-cover"
          src={thumbnails.medium.url}
          alt="thumb"
        />
      </div>

      <div className="mt-2 md:mt-0 md:ml-4 flex flex-col items-start w-full">

        <h2 className="font-normal md:font-bold text-base md:text-xl line-clamp-2 text-black">{title}</h2>
        <div className="flex flex-wrap text-sm text-gray-500 my-1">
          <p>{views} views</p>
          <p className="before:content-['•'] before:mx-1 ml-1">{time}</p>
        </div>
        <div className="flex my-2 items-center">

          <img className="w-6 h-6 rounded-full mr-2" src={channelLogo} />
          <p className="text-sm text-gray-500 hover:text-black transition-colors">{channelTitle}</p>

        </div>

        <p className="text-sm text-gray-500 line-clamp-2 md:line-clamp-none hidden md:block">{description}</p>
      </div>
    </div>
  );
};

export default SearchResultCard;
