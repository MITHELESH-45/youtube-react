import React from 'react'

const Button = ({name}) => {
  return (
    <div className='mx-2 '>
        <button className='p-2 bg-gray-200 rounded-lg px-4 cursor-pointer'>{name}</button>
    </div>
  )
}

export default Button
