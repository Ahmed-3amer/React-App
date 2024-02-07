import React from 'react'
import style from './About.module.css'

export default function About() {
  return (
    <div className='sectionBg'>
    <div className='container py-5'>
        <h1 className='mainTitle mb-0 text-center'>ABOUT COMPONENT</h1>
        <div className='d-flex justify-content-center align-items-center py-3'>
        <span className='beforeLine'></span>
        <i className="fa-solid fa-star mx-3 fs-5"></i>
        <span className='afterLine'></span>
        </div>
        <div className="row">
          <div className="col-md-5 offset-1">
            <p className={style.aboutContent}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-5 offset-1">
            <p className={style.aboutContent}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
    </div>
    </div>
  )
}
