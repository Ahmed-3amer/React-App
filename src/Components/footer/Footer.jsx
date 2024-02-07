import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <div>
      <div className='footer'>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <div className='text-center'>
          <h2>LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <span>Clark, MO 65243</span>
          </div>
          </div>
          <div className="col-md-4">
            <div className='text-center'>
            <h2>AROUND THE WEB</h2>
            <ul className='d-flex justify-content-center align-items-center pe-4'>
              <li className={style.circleIcon}><i class="fa-brands fa-facebook"></i></li>
              <li className={style.circleIcon}><i class="fa-brands fa-twitter"></i></li>
              <li className={style.circleIcon}><i class="fa-brands fa-linkedin-in"></i></li>
              <li className={style.circleIcon}><i class="fa-solid fa-globe"></i></li>
            </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className='text-center'>
            <h2>ABOUT FREELANCER</h2>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
      </div>
        <div className='endFooter text-center py-3 text-light'>
          <p>Copyright © Your Website 2021</p>
        </div>
    </div>
  )
}
