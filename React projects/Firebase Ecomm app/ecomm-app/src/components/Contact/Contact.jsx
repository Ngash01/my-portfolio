import React from 'react';
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';


export const Contact = () => {

  const form = useRef();

  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pe1i5e8', 'template_8uwrght', form.current, "IUgq-D6j28GVQanL0")
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form" id='Contact'>
      <div className="w-left">
        <div className="awesome">
          <span className='span-1'>Get In Touch</span>
          <span className="span-2">Contact Me</span>
          {/* <div className="blur s-blur" style={{background:"#ABF1FF94"}}>
          </div> */}
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='user_name' className='user' placeholder='Name'/>
          <input type="email" name='user_email' className='user' placeholder='Email'/>
          <textarea name="Message" className='user' placeholder='Message'/>
          <input type="submit" value="Send" className='button'/>
          <span>{done && "Thanks For Contacting Me!"}</span>
          {/* <div className="blur s-blur" style={{background:"#ABF1FF94"}}>
          </div> */}
        </form>
      </div>
    </div>
  )
}
