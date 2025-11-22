import React, { useEffect } from 'react'
import { Youtube_video_url } from '../utils/constants'

const VideoContainer = () => {
 
  const getYoutubeVideos=async()=>{
    const data=await fetch(Youtube_video_url);
    const json=await data.json();
    console.log(json);
  }

  useEffect(()=>{
     getYoutubeVideos();
  },[])

  return (
    <div>
       
    </div>
  )
}

export default VideoContainer
