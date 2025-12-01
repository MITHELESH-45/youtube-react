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
    <>
    <div className='w-full h-[600px]  p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
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
     className='w-108 p-2 my-2 flex border border-black '>
        <input 
        className=' p-2 w-96 border border-black'
        type='text'
        value={liveMessage}
        onChange={(e)=>{setLiveMessage(e.target.value)}}
        />
        <button 
        className='px-2 ml-2 bg-green-100'>Send</button>
        
    </form>
    </>
  )
}

export default LiveChat
