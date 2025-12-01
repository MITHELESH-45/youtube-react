import React, { useEffect } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useDispatch } from 'react-redux'
import { addpopularMovies } from '../utils/store/VideSlice'
import { Youtube_video_url } from '../utils/constants'
import { openSideBar } from '../utils/store/appSlice'

const MainContainer = () => {

  const dispatch=useDispatch();

  

  const getYoutubeVideos=async()=>{
    const data=await fetch(Youtube_video_url);
    const json=await data.json();
    
    dispatch(addpopularMovies(json.items));
  }

  useEffect(()=>{
     
     dispatch(openSideBar())
  },[])
  return (
    <div>
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer
