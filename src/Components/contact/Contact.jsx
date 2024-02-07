import React from 'react'
import style from './Contact.module.css'

export default function Contact() {
  return (
    <div>
       <h1 className={`mainTitle py-3 text-center ${style.textColor}`}>CONATCT SECTION</h1>
      <div className='d-flex justify-content-center align-items-center pb-3'>
        <span className={`beforeLine ${style.lineBg}`}></span>
        <i className={`fa-solid fa-star mx-3 fs-5 ${style.textColor}`}></i>
        <span className={`afterLine ${style.lineBg}`}></span>      
      </div>
    <div className='contactCont container w-50 m-auto'>
      <form className='mt-5'>
        <input type="text" id='userName' name='userName' className='form-control' placeholder='User Name' />
        <input type="number" className='form-control my-5' placeholder='User Age' />
        <input type="email" id='email' name='email' className='form-control' placeholder='User Email' />
        <input type="password" className='form-control my-5' placeholder='User password' />
        <button className={`mb-3 ${style.contactBtn}`}>Send Message</button>
      </form>
    </div>
    </div>
  )
}
