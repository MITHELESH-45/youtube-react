import React, { useEffect, useState } from 'react'
import CommentList from './CommentList'
import { Youtube_API_KEY } from '../utils/constants'
import { useFetchVideoDetails } from '../utils/hooks/useFetchVideoDetails'
import { formatViews } from '../utils/helper'




const CommentsContainer = ({videoId}) => {

  const [comments,setComments]=useState([])
   
  const getComments = async (videoId) => {
    
    const res = await fetch(
    `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=20&key=${Youtube_API_KEY}`
     );
     const data = await res.json();
     
    setComments(data.items)
  }
    
   useEffect(() => {
    getComments(videoId)
  }, [videoId])
  

  const videoInfo=useFetchVideoDetails(videoId);

  const rawCommentCount = videoInfo?.statistics?.commentCount;
  const commCount = rawCommentCount ? formatViews(rawCommentCount) : 0;
  
  return (
    <div className='ml-5 w-265'>
      <h1 className='font-bold text-2xl'  >{commCount} Comments</h1>
      <div>
         <CommentList comments={comments}/>
      </div>
    </div>
  )
}

export default CommentsContainer
