import React from 'react'
import "./contact.css"
import { AiOutlineMail } from "react-icons/ai"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tbb5in8', 'template_lehip1q', form.current, 'RbNnyte0woCnDL1NO')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <section id='contact'>

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>syedabdullah273@gmail.com</h5>
            <a href="mailto:syedabdullah273@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Abdullah Razi</h5>
            <a href="https://m.me/profile.php?id=100083693322792">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+917523988158</h5>
            <a href="https://api.whatsapp.com/send?phone=7523988158">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message ' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact