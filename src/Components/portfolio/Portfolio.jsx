import React, { useEffect, useState } from 'react'

import style from './Portfolio.module.css'
import img1 from '../../Assets/Images/poert1.png'
import img2 from '../../Assets/Images/port2.png'
import img3 from '../../Assets/Images/port3.png'

export default function Portfolio() {

  const [showImg, setShowImg] = useState('');

  useEffect(()=>{
    const images = document.querySelectorAll('.portfolio img');
    const showPage = document.querySelector('.showPage');
    const innerImg = document.querySelector('innerImg');
  
    for(let i = 0; i < images.length; i++){
      images[i].addEventListener('click', function(e){
        let clickedImg = e.target.getAttribute('src');
        setShowImg(innerImg.setAttribute('src'), clickedImg);
        showPage.classList.remove('d-none');
      })
    }
      showPage.addEventListener('click', function(e){
        showPage.classList.add('d-none');
      })
  },[])

  return (
    <div>     
      <section>
    <div className="container py-3">
      <h1 className={`mainTitle py-3 text-center ${style.textColor}`}>PORTFOLIO COMPONENT</h1>
      <div className='d-flex justify-content-center align-items-center pb-3'>
        <span className={`beforeLine ${style.lineBg}`}></span>
        <i className={`fa-solid fa-star mx-3 fs-5 ${style.textColor}`}></i>
        <span className={`afterLine ${style.lineBg}`}></span>      
      </div>
      <div className="row gy-5">
        <div className="col-md-4">
          <div className='portfolio position-relative overflow-hidden'>
          <img className='w-100 rounded-3' src={img1} alt="home_image" />
          <div className='rounded-3 layer'>
          <i className={`fa-solid fa-plus ${style.plusIcon}`}></i>
          </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className='portfolio position-relative overflow-hidden'>
          <img className='w-100 rounded-3' src={img2} alt="cake_image" />
          <div className='rounded-3 layer'>
          <i className={`fa-solid fa-plus ${style.plusIcon}`}></i>
          </div>
          </div>
        </div>
        <div className="col-md-4 ">
         <div className='portfolio position-relative overflow-hidden'>
         <img className='w-100 rounded-3' src={img3} alt="circus_image" />
          <div className='rounded-3 layer'>
          <i className={`fa-solid fa-plus ${style.plusIcon}`}></i>
          </div>
         </div>
        </div>
        <div className="col-md-4">
          <div className='portfolio position-relative overflow-hidden'>
          <img className='w-100 rounded-3' src={img1} alt="home_image" />
          <div className='rounded-3 layer'>
          <i className={`fa-solid fa-plus ${style.plusIcon}`}></i>
          </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className='portfolio position-relative overflow-hidden'>
          <img className='w-100 rounded-3' src={img2} alt="cake_image" />
          <div className='rounded-3 layer'>
          <i className={`fa-solid fa-plus ${style.plusIcon}`}></i>
          </div>
          </div>
        </div>
        <div className="col-md-4">
         <div className='portfolio position-relative overflow-hidden'>
         <img className='w-100 rounded-3' src={img3} alt="circus_image" />
          <div className='rounded-3 layer'>
          <i className={`fa-solid fa-plus ${style.plusIcon}`}></i>
          </div>
         </div>
        </div>
      </div>
    </div>
    </section>

    <div className={`${style.lightBg} d-none showPage vh-100 bg-primary bg-opacity-25`}>
      <div className="container w-50 mx-auto">
        <div className='z-3'>
          <img src="" alt="boxImage" className='w-100 rounded-3 innerImg' />
        </div>
      </div>
    </div>
    </div>
  )
}
