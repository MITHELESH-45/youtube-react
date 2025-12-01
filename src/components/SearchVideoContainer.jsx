import React from 'react'
import { useFetchVideoDetails } from '../utils/hooks/useFetchVideoDetails'
import { useFetchChannelDetails } from '../utils/hooks/useFetchChannelDetails';
import { formatViews, timeAgo } from '../utils/helper';


const SearchVideoContainer = ({VideoId}) => {
  

  const video=useFetchVideoDetails(VideoId);
  const channelId = video?.snippet?.channelId
  const channel=useFetchChannelDetails(channelId);
  if (!video||!channel) return null;
   
   const { snippet, statistics } = video;

   const{channelTitle,description,title,publishedAt}=snippet;
   const{likeCount,viewCount}=statistics;
   
   
   const {thumbnails}=channel.snippet;
   const {subscriberCount}=channel.statistics;

   const subsCount=formatViews(subscriberCount);
   const likes=formatViews(likeCount);
   const views=formatViews(viewCount);
   const time=timeAgo(publishedAt);
   

   const logo=thumbnails?.medium?.url;
  return (
    <div>
      <div>
      <iframe 
       className='rounded-xl'
       width="1050"
       height="600" 
       src={`https://www.youtube.com/embed/${VideoId}?autoplay=1&mute=0`}
       title="YouTube video player"
       frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       referrerPolicy="strict-origin-when-cross-origin"
       allowFullScreen></iframe>  
    </div>
    <div className='mt-2 ml-1 '>
       <h1 className='text-2xl font-bold'>{title}</h1>

       <div className='flex justify-between mt-2'>
           {/*2*/}
          <div className='flex'>
            <div className='p-2 -ml-1'>
               <img className='w-10 h-10 rounded-full' alt='logo'src={logo}/>
            </div>
            <div className='ml-2 items-center p-1'>
                <p className='font-bold text-lg'>{channelTitle}</p>
                <p className='text-sm text-gray-600'>{subsCount} subscribers</p>
            </div>
            <div className='mx-4 items-center -mb-2 '>
                 <button className='rounded-4xl bg-black mt-1 text-white px-5 py-3'>Join</button>
                 <button className='rounded-4xl bg-black mx-1 mt-1 text-white px-5 py-3'>Subscribe</button>

            </div>

          </div>
           
           {/*3*/}
          <div className='p-2 '>
                <button className='rounded-2xl bg-gray-200 px-4 py-2 -mb-1'>👍{likes}</button>
                <button className='rounded-2xl bg-gray-200 px-4 py-2 -mb-1 mx-2'>share</button>
                <button className='rounded-2xl bg-gray-200 px-4 py-2 -mb-1 mx-2'>Download</button>
                <button className='rounded-2xl bg-gray-200 px-4 py-2 -mb-1 mx-2 font-bold items-center'>...</button>



          </div>
       </div>
       <div className='w-full bg-gray-200 mt-2 p-2 h-27 overflow-y-scroll'>
           <div className='flex'>
             <p className='font-bold'>{views} views </p>
             <p className='font-bold mx-2'>{time}</p>
           </div>
           <p>{description}</p>
       </div>

    </div>
  </div>
  )
} 

export default SearchVideoContainer
