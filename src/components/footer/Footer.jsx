import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import logo from "../../assets/logo.png"
import "./footer.css"

const Footer = () => {
  return (
    <div className='er__footer'>
        <div className='er__footer-img'>
          <img src={logo} alt='logo' />
        </div>
        <div className='er__footer-copyright'>
          <p>copyright</p>
        </div>
        <div className='socials'>
            <Link className='link' to='/'><AiFillInstagram size={21} /></Link>
            <Link className='link' to='/'><AiFillTwitterCircle size={21} /></Link>
        </div>
    </div>
  )
}

export default Footer