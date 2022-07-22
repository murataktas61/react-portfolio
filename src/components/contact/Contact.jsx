import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rwibnyl', 'template_ntskyyv', form.current, 'Xabrc8HKt_QuhUbxa')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get ın Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact_options'>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>aktasmuratt7@gmail.com</h5>
            <a href='mailto:aktasmuratt7@gmail.com' target="_blank">Send a message</a>
          </article> <br></br>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>noui0x</h5>
            <a href='https://m.me/murat.aktas19' target="_blank">Send a message</a>
          </article>  <br></br>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>5378523995</h5>
            <a href='https://wa.me/905378523995' target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <input  type="text" name='name' placeholder='Your Full Name' required />
        <input  type="email" name='email' placeholder='Your Email' required />
        <textarea  name='message' placeholder='Your  Message' required />
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
