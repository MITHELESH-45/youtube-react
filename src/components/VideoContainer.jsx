import React, { useEffect,useState } from 'react'
import { Youtube_video_url } from '../utils/constants'
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
   
  const videos=useSelector(store=>store.videos.popularVideos)

  return (
    <div className='flex flex-wrap'>
       {videos.length > 0 &&

              videos.map((video)=>(
                   <Link  key={video.id} to={"/watch?v="+video.id}><MovieCard  info={video} /></Link>
              ))
       }
    </div>
  )
}

export default VideoContainer
