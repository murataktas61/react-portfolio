import React from 'react'
import CTA from './CTA';
import './header.css';
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>MURAT AKTAŞ</h1>
        <a href='https://www.aktyazilim.com' target="_blank">Web site</a>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt='' />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
