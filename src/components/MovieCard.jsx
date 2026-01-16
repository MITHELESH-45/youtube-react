import React from 'react'
import { formatViews, timeAgo } from '../utils/helper';

const MovieCard = ({ info }) => {

  const { snippet, statistics } = info;

  const { channelTitle, thumbnails, title, publishedAt } = snippet;
  const { viewCount } = statistics;
  const views = formatViews(viewCount);
  const time = timeAgo(publishedAt);


  return (
    <div className='w-full shadow-lg rounded-lg my-2 p-2 hover:bg-gray-100 transition-all'>
      <img className="rounded-lg w-full object-cover" alt='thumbnail' src={thumbnails.medium.url} />
      <ul className='mt-2'>
        <li className='font-bold line-clamp-2 leading-snug'>{title}</li>
        <li className='mt-1 font-semibold text-gray-500 text-sm'>{channelTitle}</li>
        <div className='flex text-sm text-gray-500'>
          <li>{views} views</li>
          <p className='ml-1'>• {time}</p>
        </div>
      </ul>
    </div>
  )
}

export default MovieCard
