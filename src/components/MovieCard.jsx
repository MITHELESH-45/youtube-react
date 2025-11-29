import React from 'react'

const MovieCard = ({info}) => {

    const {snippet,statistics}=info;

    const {channelTitle,thumbnails,title}=snippet;
    const {viewCount}=statistics;


  return (
    <div className='w-66 shadow-lg my-4 mx-4 p-2 h-82 '>
      <img  className="rounded-lg h-41"alt='thumbnail' src={thumbnails.medium.url}/>
      <ul className='mt-1'>
        <li className='font-bold'>{title}</li>
        <li className='mt-2 font-semibold text-gray-500'>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  )
}

export default MovieCard
