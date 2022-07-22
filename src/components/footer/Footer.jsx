import React from 'react'
import './footer.css'
import {FaFacebookF,FaInstagramSquare,FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>noui0x</a>
      <ul className='permalinks'>
        <li><a href=''>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Expeirience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href=''><FaFacebookF/></a>
        <a href=''><FaInstagramSquare/></a>
        <a href=''><FaLinkedin/></a>
      </div>
      <div className='footer__copyright'>
        <small>© noui0x  All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
