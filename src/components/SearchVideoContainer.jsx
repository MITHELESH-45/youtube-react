import React from 'react'
import { useFetchVideoDetails } from '../utils/hooks/useFetchVideoDetails'
import { useFetchChannelDetails } from '../utils/hooks/useFetchChannelDetails';
import { formatViews, timeAgo } from '../utils/helper';


const SearchVideoContainer = ({ VideoId }) => {


  const video = useFetchVideoDetails(VideoId);
  const channelId = video?.snippet?.channelId
  const channel = useFetchChannelDetails(channelId);
  if (!video || !channel) return null;

  const { snippet, statistics } = video;

  const { channelTitle, description, title, publishedAt } = snippet;
  const { likeCount, viewCount } = statistics;


  const { thumbnails } = channel.snippet;
  const { subscriberCount } = channel.statistics;

  const subsCount = formatViews(subscriberCount);
  const likes = formatViews(likeCount);
  const views = formatViews(viewCount);
  const time = timeAgo(publishedAt);


  const logo = thumbnails?.medium?.url;
  return (
    <div className='w-full'>
      <div className='w-full aspect-video'>
        <iframe
          className='rounded-xl w-full h-full'
          src={`https://www.youtube.com/embed/${VideoId}?autoplay=1&mute=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </div>
      <div className='mt-2 mx-1 md:ml-1 '>
        <h1 className='text-xl md:text-2xl font-bold line-clamp-2'>{title}</h1>

        <div className='flex flex-col md:flex-row justify-between mt-2 gap-4'>
          {/*2*/}
          <div className='flex flex-wrap items-center gap-2'>
            <div className='p-2 -ml-1 flex-shrink-0'>
              <img className='w-10 h-10 rounded-full' alt='logo' src={logo} />
            </div>
            <div className='ml-2 p-1'>
              <p className='font-bold text-lg'>{channelTitle}</p>
              <p className='text-sm text-gray-600'>{subsCount} subscribers</p>
            </div>
            <div className='flex items-center mt-2 md:mt-0'>
              <button className='rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:opacity-90'>Join</button>
              <button className='rounded-full bg-black mx-2 text-white px-4 py-2 text-sm font-medium hover:opacity-90'>Subscribe</button>

            </div>

          </div>

          {/*3*/}
          <div className='flex flex-wrap gap-2 items-center'>
            <button className='rounded-full bg-gray-100 hover:bg-gray-200 px-4 py-2 text-sm font-medium'>👍 {likes}</button>
            <button className='rounded-full bg-gray-100 hover:bg-gray-200 px-4 py-2 text-sm font-medium'>Share</button>
            <button className='hidden md:block rounded-full bg-gray-100 hover:bg-gray-200 px-4 py-2 text-sm font-medium'>Download</button>
            <button className='rounded-full bg-gray-100 hover:bg-gray-200 px-3 py-2 font-bold'>...</button>
          </div>
        </div>
        <div className='w-full bg-gray-100 hover:bg-gray-200 rounded-xl mt-4 p-3 text-sm'>
          <div className='flex gap-2 font-bold mb-2'>
            <p>{views} views </p>
            <p>{time}</p>
          </div>
          <p className='whitespace-pre-wrap break-words'>{description}</p>
        </div>

      </div>
    </div>
  )
}

export default SearchVideoContainer
