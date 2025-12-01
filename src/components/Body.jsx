import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useDispatch } from 'react-redux'
import { Youtube_video_url } from '../utils/constants'
import { addpopularMovies } from '../utils/store/VideSlice'


const Body = () => {
  
   const dispatch=useDispatch();

  

  const getYoutubeVideos=async()=>{
    const data=await fetch(Youtube_video_url);
    const json=await data.json();
    
    dispatch(addpopularMovies(json.items));
  }



  useEffect(()=>{
    getYoutubeVideos();
  },[])
  
  return (
    <>
    <Header />
    <div className='flex mt-2'>
      <Sidebar />
      <Outlet />
    </div>
    </>
  )
}

export default Body
