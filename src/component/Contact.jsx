import React from 'react'
import { useState, useEffect } from "react";

// import { MdOutlineEmail } from 'react-icons/md';

export default function Contact(props) {
  const[theme , setTheme] = useState("light")


  useEffect(()=>{
    setTheme(`${props.mode === 'light'?"dark":"light "}`)
    // console.log(setTheme)
  })
  

  return (
    <section id="contact">
      <h5 className={`text-${theme}`}>Get In Touch</h5>
      <h2 className={`text-${theme}`}>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            {/* <MdOutlineEmail className="contact__option-icon" /> */}
            <h4 className={`text-${theme}`}>Email</h4>
            <h5 className={`text-${theme}`}>aakashramani1020@gmail.com </h5>
            <a href="mailto:aakashramani1020@gmail.com">Send a message</a>
          </article>
        </div>
        <form>
          <input  className={`box bg-${props.mode === 'light'?"light":"dark "} text-${theme} my-3`} type="text" placeholder="Your Full Name" name="user_name" required /><br></br>
          <input className={`box bg-${props.mode === 'light'?"light":"dark "} text-${theme} my-3`} type="text" placeholder="Your Email" name="user_email" required/><br></br>
          <textarea  className={`box bg-${props.mode === 'light'?"light":"dark "} text-${theme} my-3`} placeholder="Your message" rows="2  " name="message" required></textarea><br></br>
          <button type="" className="btn btn-primary my-2 disabled">Send Message</button><br></br>
        </form>
      </div>

    </section>
  )
}
