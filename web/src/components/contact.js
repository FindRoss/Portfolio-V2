import React, { useState } from 'react'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // https://docs.netlify.com/forms/setup/?_ga=2.199493806.1065879870.1612807836-1151227392.1612372602
  // https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/?_ga=2.230386204.1065879870.1612807836-1151227392.1612372602

  const urlEncode = (obj) => {
    let encodedString = '';
    let ObjArr = Object.entries(obj);

    ObjArr.map(([key, value], i) => {
      return encodedString += `${key}=${value}${(i === (ObjArr.length - 1)) ? '' : '&'}`
    })

    return encodedString;
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") return;

    const payload = { name, email, message };

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: urlEncode({ "form-name": e.target.getAttribute("name"), ...payload })
    })
      .then(console.log('i.... i think that worked.'))
      .catch(error => alert(error))

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className="cont">
      <form onSubmit={handleSubmit} className="form" name="contact" method="POST" data-netlify="true">
        <div className="form--row">
          <label className="form--row__label" htmlFor="name">Name</label>
          <input className="form--row__input" value={name} type="text" name="name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form--row">
          <label htmlFor="email" className="form--row__label">Email</label>
          <input className="form--row__input" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form--row">
          <label htmlFor="message" className="form--row__label">Message</label>
          <textarea className="form--row__input" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <div className="form--row">
          <button className="btn form--row__btn" type="submit">Send</button>
        </div>
      </form>
    </div>
  )
}


export default Contact

