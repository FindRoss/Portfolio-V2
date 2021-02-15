import React from 'react'
import Form from './form';

function Contact() {
  return (
    <div className="contact">
      <div className="cont contact--layout">
        <div className="contact--layout__message">
          <h2 className="section-heading">Get in touch</h2>
        </div>
        <div className="contact--layout__form">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Contact;
