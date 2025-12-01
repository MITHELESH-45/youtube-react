import { timeAgo } from "../utils/helper";

const SearchResultCard = ({ info,logo }) => {

  const { snippet } = info;
  const { title, thumbnails, channelTitle, description,publishedAt } = snippet;
  const time=timeAgo(publishedAt);
  return (
    <div className="flex my-4 p-3 border-b cursor-pointer">
      <div className="w-96">
        <img
            className="w-96 rounded-lg"
            src={thumbnails.medium.url}
            alt="thumb"
        />
      </div>

      <div className="ml-4">

        <h2 className="font-bold text-lg">{title}</h2>
        <p>{time}</p>
        <div className="flex my-2 items-center">

         <img className="w-4 h-4 mr-2"src={logo.medium.url}/>   
         <p className="text-sm text-gray-500">{channelTitle}</p>

        </div>

        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default SearchResultCard;
