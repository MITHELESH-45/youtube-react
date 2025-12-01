import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/store/ChatSlice';
import { generateRandomMesaage, generateRandomName } from '../utils/helper';

const LiveChat = () => {
  
  const [liveMessage,setLiveMessage]=useState("");
  const dispatch=useDispatch();  

  const chatMessages=useSelector(store=>store.chat.messages);
  useEffect(()=>{
     
    const i=setInterval(()=>{
       
       dispatch(addMessage({
        name:generateRandomName(),
        message:generateRandomMesaage(20)
       }));
    },1500);

    return()=>{
        clearInterval(i);
    }

  },[]);

  return (
    <div className='-ml-1'>
      <div className='rounded-t-lg border border-black p-2'>
      <h1 className='font-bold m-2'>LiveChat</h1>
      </div>
    <div className='w-full h-[600px]  p-2 border border-black bg-slate-100  overflow-y-scroll flex flex-col-reverse'>
       <div>
       {
        chatMessages.map((c,index)=>(
        <ChatMessage key={index}
            name={c.name} message={c.message}
            />
        ))
       }
       </div>
       
    </div>
    <form 
     onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name:"Mithul",
            message:liveMessage
        }))
        setLiveMessage("");
     }}
     className='w-108 p-2 flex border border-black rounded-b-lg '>
        <input 
        className=' p-2 w-96 border border-black rounded-l-2xl'
        placeholder='Type a message....'
        type='text'
        value={liveMessage}
        onChange={(e)=>{setLiveMessage(e.target.value)}}
        />
        <button 
        className='px-2  bg-green-100 rounded-r-2xl border border-black'>Send</button>
        
    </form>
    </div>
  )
}

export default LiveChat
