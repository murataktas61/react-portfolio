import React from 'react'
import './about.css'
import ME from '../../assets/me3.png'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt='About Image'/>
          </div>
        </div>
        <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>+6 Years Working</small>
              </article>
              <article className='about__card'>
                  <FiUsers className='about__icon'/>
                  <h5>Clients</h5>
                  <small>30+ Worldwide</small>
              </article>
              <article className='about__card'>
                  <VscFolderLibrary className='about__icon'/>
                  <h5>Projects</h5>
                  <small>15+ Completed</small>
              </article>
            </div>
            <p>I am a graduate of Istanbul Aydın University Computer Programming Department and I have been working on my department since 2015.<br></br>
            Since 2015, I have been involved in software work, covering a variety of fields of study.
                Among my works are HTML, CSS, JavaScript, React, MySQL etc. code languages ​​available.</p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>


      </div>

    </section>
  )
}

export default About
