import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

export default function Navbar() {
  return (
    <div>
        <nav
            className={`navbar navbar-expand-lg navbar-light py-4 ${style.navBgColor}`}
        >
            <div className="container">
                <Link className={`navbar-brand ${style.navText} text-white`} to="home">START FRAMEWORK</Link>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${style.textSize} text-white`} to="about">ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link mx-2 ${style.textSize} text-white`} to="portfolio">PORTFOLIO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${style.textSize} text-white`} to="contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    </div>
  )
}
