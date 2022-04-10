import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import "./footer.css"

const Footer = () => {
  return (
    <div className='er__footer'>
        <div className='navigation'>
            <p><Link className='link' to="/">Home</Link></p>
            <p><Link className='link' to="/about">About LIFE</Link></p>
            <p><Link className='link' to="/events/day">Events</Link></p>
            <p><Link className='link' to="/partner">Partner</Link></p>
            <p><Link className='link' to="/tickets">Tickets</Link></p>
            <p><Link className='link' to="/contactus">Contact</Link></p>
        </div>
        <div className='socials'>
            <Link className='link' to='/'><AiFillInstagram size={21} /></Link>
            <Link className='link' to='/'><AiFillTwitterCircle size={21} /></Link>
        </div>
    </div>
  )
}

export default Footer