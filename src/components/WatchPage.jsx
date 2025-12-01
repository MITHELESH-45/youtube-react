import React, {  useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { closeSideBar } from '../utils/store/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

   const [searchParams]=useSearchParams();
   const VideoId=searchParams.get("v");
  
  const dispatch=useDispatch();  
  
  useEffect(()=>{
     dispatch(closeSideBar());
  },[])
    
  return (
    <div className='flex flex-col w-full'>
    <div className='mx-4 my-4  p-2 flex w-full'>
      <div>
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

       <div className='w-full mx-4'>
          <LiveChat />
      </div>
    </div>
    
    <div>
      <CommentsContainer />
    </div>
    </div>
  )
}

export default WatchPage
