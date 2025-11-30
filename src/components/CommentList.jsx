import React from 'react'
import Comment from './Comment'

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          
          
          {comment.replies.length > 0 && (
            <div className="ml-6 border-l pl-4">
              <CommentList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default CommentList
