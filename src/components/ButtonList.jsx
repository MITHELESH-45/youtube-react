import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex m-2'>
       
       <Button name={"All"}/>
       <Button name={"Music"} />
       <Button name={"Movies"}/>

    </div>
  )
}

export default ButtonList
