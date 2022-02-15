import React from 'react'
import Kamran from './kamran-2.jpg'
import './TopImg.css'

const TopImg = () => {
  return (
    <div className="topimg">
      <img className="myimg" alt="Profile-Photo" src={Kamran} width='300px' height='auto' />
    </div>
  )
}

export default TopImg;
