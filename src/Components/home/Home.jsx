import React, { useEffect } from 'react'
import style from './Home.module.css'
import img from '../../Assets/Images/avataaars.svg'
export default function Home() {

  return (
    <div className={`${style.homeBg} text-center py-4`}>
      <img src={img} className={`${style.homeImage} pb-3`} alt="avatar" />
      <h1 className='mainTitle py-3'>START FRAMEWORK</h1>
      <div className='d-flex justify-content-center align-items-center pb-3'>
        <span className='beforeLine'></span>
        <i className="fa-solid fa-star mx-3 fs-5"></i>
        <span className='afterLine'></span>      
      </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
