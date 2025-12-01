import { formatViews, timeAgo } from "../utils/helper";

const SearchResultCard = ({ info}) => {
  
  const { snippet,channelLogo,statistics } = info;
  const { title, thumbnails, channelTitle, description,publishedAt } = snippet;
  const time=timeAgo(publishedAt);
  console.log(statistics);
  const viewsOrginal=statistics?.viewCount;

  const views=viewsOrginal?formatViews(viewsOrginal):0;
  
  return (
    <div className="flex my-4 p-3  cursor-pointer shadow-lg">
      <div className="w-96">
        <img
            className="w-96 rounded-lg"
            src={thumbnails.medium.url}
            alt="thumb"
        />
      </div>

      <div className="ml-4">

        <h2 className="font-bold text-lg">{title}</h2>
        <div className="flex my-2">
          <p>{views} views</p>
          <p className="text-gray-500 ml-4">{time}</p>
        </div>
        <div className="flex my-2 items-center">

         <img className="w-4 h-4 mr-2"src={channelLogo} />
         <p className="text-sm text-gray-500">{channelTitle}</p>

        </div>

        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default SearchResultCard;
