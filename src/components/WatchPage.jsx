import React, {  useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { closeSideBar } from '../utils/store/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

   const [searchParams]=useSearchParams();
   const VideoId=searchParams.get("v");
  
  const dispatch=useDispatch();  
  
  useEffect(()=>{
     dispatch(closeSideBar());
  },[])
    
  return (
    <div className='mx-4 my-4  p-2'>
      <iframe 
       className='rounded-xl'
       width="1050"
       height="600" 
       src={"https://www.youtube.com/embed/"+VideoId}
       title="YouTube video player"
       frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       referrerPolicy="strict-origin-when-cross-origin"
       allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage
