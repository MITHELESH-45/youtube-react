import React from 'react'
import { formatViews, timeAgo } from '../utils/helper';

const MovieCard = ({info}) => {

    const {snippet,statistics}=info;

    const {channelTitle,thumbnails,title,publishedAt}=snippet;
    const {viewCount}=statistics;
    const views=formatViews(viewCount);
    const time=timeAgo(publishedAt);


  return (
    <div className='w-96 shadow-lg my-4 mx-4 p-2 h-85 '>
      <img  className="rounded-lg w-90 h-50"alt='thumbnail' src={thumbnails.medium.url}/>
      <ul className='mt-1'>
        <li className='font-bold'>{title}</li>
        <li className='mt-2 font-semibold text-gray-500'>{channelTitle}</li>
        <div className='flex'>
        <li>{views} views</li>
        <p className='ml-2 text-gray-500'>{time}</p>
        </div>
      </ul>
    </div>
  )
}

export default MovieCard
