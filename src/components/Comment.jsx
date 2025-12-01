import React from 'react'
import { formatViews, timeAgo } from '../utils/helper'

const Comment = ({data}) => {
    const{authorDisplayName,likeCount,authorProfileImageUrl,textDisplay,publishedAt}=data.snippet.topLevelComment.snippet
    
    const time=timeAgo(publishedAt);
    const like=formatViews(likeCount);
 
    return (
    <div className='flex mt-2  p-2 bg-gray-100 shadow-sm rounded-lg '>
       <img className='w-12 h-12 rounded-full'
       alt='user' src={authorProfileImageUrl}/>
 
       <div className='ml-2 px-2'>
        <div className='flex items-center'>
        <p className='font-bold text-sm my-1'>{authorDisplayName} </p>
        <p className='text-gray-500 ml-2'>{time}</p>
        </div>
        <p dangerouslySetInnerHTML={{ __html: textDisplay }} />
        <div className='flex items-center mt-1'>
        <p className=''>👍</p>
        <p className='text-gray-500 text-sm'> {like}</p>
        <p className='mx-4'>👎</p>
        <p className='text-sm text-gray-500 cursor-pointer items-center'>Reply</p>
         
        
        </div>
        <div className='items-center mt-2 cursor-pointer'>
        <p className='items-center text-gray-700'> ▼ {data.snippet.totalReplyCount} Replies</p>
        </div>


       </div>
    </div>
  )
}

export default Comment
