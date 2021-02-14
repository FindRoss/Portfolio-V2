import React from 'react'
import Form from './form';

function Contact() {
  return (
    <div className="contact">
      <div className="cont contact--layout">
        <div className="contact--layout__message">
          <h2>Get in touch</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <ul>
            <li>Phone: 111-222-3333</li>
            <li>Email: rosspfindla@gmail.com</li>
          </ul>
        </div>
        <div className="contact--layout__form">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Contact;
