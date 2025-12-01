import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
      <img
       className='h-8 rounded-full'
       src='https://yt4.ggpht.com/ytc/AIdro_nWBkhs3XZcENi1MSPCdcXzpUjnMm2sZJbVobSifX-nvmmNb8bXfpOmj_RTnLGbL03qbA=s32-c-k-c0x00ffffff-no-rj'
      alt='user'/>
      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage
