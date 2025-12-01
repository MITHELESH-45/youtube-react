import React, {  useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { closeSideBar } from '../utils/store/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import SearchVideoContainer from './SearchVideoContainer';
import SuggestedVideos from './SuggestedVideos';
import { useFetchVideoDetails } from '../utils/hooks/useFetchVideoDetails';

const WatchPage = () => {

   const [searchParams]=useSearchParams();
   const VideoId=searchParams.get("v");
  
  const dispatch=useDispatch();  
  
  const video = useFetchVideoDetails(VideoId);
  const videoTitle = video?.snippet?.title;

  useEffect(()=>{
     dispatch(closeSideBar());
  },[VideoId])
    
  return (
    <div className='flex flex-col w-full'>
    <div className='mx-4 my-4  p-2 flex w-full'>
      <div>
         <SearchVideoContainer VideoId={VideoId} />
       </div>

       <div className='w-full mx-4'>
          <LiveChat />
      </div>
    </div>
    <div className='flex'>
          <div>
            <CommentsContainer videoId={VideoId}/>
          </div>
          <div className='m-2 -mt-30 p-2'>
              <h1 className='font-bold text-xl mb-2'>Related Videos</h1>
              <SuggestedVideos title={videoTitle}/>
          </div>
    </div>
    </div>
  )
}

export default WatchPage
