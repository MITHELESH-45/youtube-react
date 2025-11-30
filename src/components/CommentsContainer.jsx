import React from 'react'
import CommentList from './CommentList'


const commentData=[
    {
        name:"Henry",
        text:"lorem fdko fdmodb orjgoper sjdoivnro sojnvoi",
        replies:[]
        
    },
    {
        name:"Henry",
        text:"lorem fdko fdmodb orjgoper sjdoivnro sojnvoi",
        replies:[
            {
                name:"Henry",
                text:"lorem fdko fdmodb orjgoper sjdoivnro sojnvoi",
                replies:[]
            },
            {
                name:"Henry",
                text:"lorem fdko fdmodb orjgoper sjdoivnro sojnvoi",
                replies:[
                    {
                        name:"Henry",
                        text:"lorem fdko fdmodb orjgoper sjdoivnro sojnvoi",
                        replies:[
                            {
                                name:"Henry",
                                text:"lorem fdko fdmodb orjgoper sjdoivnro sojnvoi",
                                replies:[
                                     {
                                        name:"Henry",
                                        text:"lorem fdko fdmodb orjgoper sjdoivnro sojnvoi",
                                        replies:[
                                             {
                                                name:"Henry",
                                                text:"lorem fdko fdmodb orjgoper sjdoivnro sojnvoi",
                                                replies:[
                                                     {
                                                        name:"Henry",
                                                        text:"lorem fdko fdmodb orjgoper sjdoivnro sojnvoi",
                                                        replies:[]
                                
                                                     }
                                                ]
        
                                             }
                                        ]
        
                                     }
                                ]
        
                            }
                        ]
        
                    }
                ]
        
            },
            {
                name:"Henry",
                text:"lorem fdko fdmodb orjgoper sjdoivnro sojnvoi",
                replies:[
                    {
                        name:"Henry",
                        text:"lorem fdko fdmodb orjgoper sjdoivnro sojnvoi",
                        replies:[
                            {
                                name:"Henry",
                                text:"lorem fdko fdmodb orjgoper sjdoivnro sojnvoi",
                                replies:[]
        
                            },
                            {
                                name:"Henry",
                                text:"lorem fdko fdmodb orjgoper sjdoivnro sojnvoi",
                                replies:[]
        
                            }
                        ]
        
                    }
                ]
        
            }
        ]
        
    },
    {
        name:"Henry",
        text:"lorem fdko fdmodb orjgoper sjdoivnro sojnvoi",
        replies:[]
        
    },
    {
        name:"Henry",
        text:"lorem fdko fdmodb orjgoper sjdoivnro sojnvoi",
        replies:[]
        
    },
    {
        name:"Henry",
        text:"lorem fdko fdmodb orjgoper sjdoivnro sojnvoi",
        replies:[]
        
    },
    {
        name:"Henry",
        text:"lorem fdko fdmodb orjgoper sjdoivnro sojnvoi",
        replies:[]
        
    }
]
const CommentsContainer = () => {
  return (
    <div className='ml-5 w-265'>
      <h1 className='font-bold text-3xl'  >Comments</h1>
      <div>
         <CommentList comments={commentData}/>
      </div>
    </div>
  )
}

export default CommentsContainer
