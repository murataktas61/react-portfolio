import React from 'react'
import {BsGithub,BsLinkedin} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/murataktaş/' target="_blank"><BsLinkedin/></a>
      <a href='https://github.com/murataktas61' target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials
