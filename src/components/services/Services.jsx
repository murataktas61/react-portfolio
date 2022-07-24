import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Software Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Web Application Development</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>SITECORE DEVELOPMENT</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Mobile Application Development</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Technology Consultancy</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Sharepoint Consultancy</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Sitecore Consultancy</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>.NET Framework Consultancy</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>MS-SQL Database Management Consultancy</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Design (UI-UX) Technologies Consultancy</p>
            </li>
           
        
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Design Services</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Mobile Application Design</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Web Application Design</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Wireframe Design</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Development</p>
            </li>
        
        
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
