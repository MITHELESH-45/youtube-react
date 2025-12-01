import React from 'react'
import Comment from './Comment'

const CommentList = ({ comments }) => {
  
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          
          
          
         
        </div>
      ))}
    </div>
  )
}

export default CommentList
