import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSideBar } from '../utils/store/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import SearchVideoContainer from './SearchVideoContainer';
import SuggestedVideos from './SuggestedVideos';
import { useFetchVideoDetails } from '../utils/hooks/useFetchVideoDetails';

const WatchPage = () => {

  const [searchParams] = useSearchParams();
  const VideoId = searchParams.get("v");

  const dispatch = useDispatch();

  const video = useFetchVideoDetails(VideoId);
  const videoTitle = video?.snippet?.title;

  useEffect(() => {
    dispatch(closeSideBar());
  }, [VideoId])

  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col lg:flex-row w-full gap-4 p-2 md:p-4'>
        <div className='w-full lg:w-[65%] xl:w-[70%]'>
          <SearchVideoContainer VideoId={VideoId} />
          <div className='mt-4 block lg:hidden'>
            <CommentsContainer videoId={VideoId} />
          </div>
        </div>

        <div className='w-full lg:w-[35%] xl:w-[30%]'>
          <LiveChat />
          <div className='mt-4'>
            <h1 className='font-bold text-xl mb-2'>Related Videos</h1>
            <SuggestedVideos title={videoTitle} />
          </div>
        </div>
      </div>
      <div className='hidden lg:block w-[70%] px-4'>
        <CommentsContainer videoId={VideoId} />
      </div>
    </div>
  )
}

export default WatchPage
