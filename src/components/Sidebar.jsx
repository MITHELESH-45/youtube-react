import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isSidebarVisible=useSelector(store=>store.app.isSideBar);

  if(!isSidebarVisible) return null;
  return (
    <div className='w-64  flex-shrink-0   shadow-lg m-2 p-2'>
       
       <ul className='p-2 -mt-5'>
        <Link to="/"><li className='my-2'>Home</li></Link>
        <li className='my-2'>Shorts</li>
        <li>Subscriptions</li>

       </ul>

       <hr className='mt-2'></hr>

       <h1 className='mt-2 font-bold text-lg'>You</h1>

       <ul className='p-2'>
          <li className='mb-2'>History</li>
          <li className='my-2'>Your Videos</li>
          <li className='my-2'>Watch Later</li>
          <li>Liked Videos</li>       
       </ul>

       <hr className='my-2'></hr>

       <h1 className='mt-2 font-bold text-lg'>Subscriptions</h1>
       
       <ul className='p-2'>
          <li className=''>Akshay Saini</li>
          <li className='my-2'>A2D</li>
          <li className='my-2'>MrBeast</li>
       </ul>

       <hr></hr>

       <h1 className='font-bold text-lg'>Explore    </h1>

       <ul className='p-2'>
          <li className='my-2'>Music</li>
          <li className='my-2'>Movies</li>
          <li className='my-2'>Sports</li>
       </ul>

       <hr></hr>

       <ul className='p-2'>
        <li className='my-2'>Settings</li>
        <li className='my-2'>Help</li>
       </ul>
    </div>
  )
}

export default Sidebar
