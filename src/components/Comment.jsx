import React from 'react'

const Comment = ({data}) => {
    const{name,text}=data
  return (
    <div className='flex mt-2  p-2 bg-gray-100 shadow-sm rounded-lg '>
       <img className='w-12 h-12'
       alt='user' src='https://imgs.search.brave.com/fjCvMiXzsumVEtBZ4JBfabm1E4nLGayIbsSZlQ9BxJU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/Mzk1ODI1MC92ZWN0/b3IvdXNlci1hdmF0/YXItcHJvZmlsZS1p/Y29uLWJsYWNrLXZl/Y3Rvci1pbGx1c3Ry/YXRpb24tb24tdHJh/bnNwYXJlbnQtYmFj/a2dyb3VuZC13ZWJz/aXRlLW9yLWFwcC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/b0dHeXhYYzFqYVJB/b3BjczRaRWtaMUxi/dEFvUXdLcDRRMG5p/THZKTmstbz0'/>
       <div>
        <p>{name}</p>
        <p>{text}</p>
       </div>
    </div>
  )
}

export default Comment
