import React, { useEffect,useState } from 'react'
import { Youtube_video_url } from '../utils/constants'
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
   
  const [videos,setVideoes]=useState([]);

  const getYoutubeVideos=async()=>{
    const data=await fetch(Youtube_video_url);
    const json=await data.json();
    console.log(json.items);
    setVideoes(json.items);
  }

  useEffect(()=>{
     getYoutubeVideos();
  },[])

  return (
    <div className='flex flex-wrap'>
       {videos.length > 0 &&

              videos.map((video)=>(
                   <Link to={"/watch?v="+video.id}><MovieCard key={video.id} info={video} /></Link>
              ))
       }
    </div>
  )
}

export default VideoContainer
