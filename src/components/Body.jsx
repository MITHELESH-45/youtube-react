import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className='flex mt-2'>
      <Sidebar />
      <MainContainer />
    </div>
  )
}

export default Body
