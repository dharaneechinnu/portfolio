import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import contact from "./Img/contact.jpg"
const Contact = () => {
    const form = useRef();
    const [name,setName] = useState("")
    const [num,setNum] = useState(null)
    const [mess,setMess] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_dxfys7h', 'template_x0k88uu', form.current, 'kfGno4SgaMckgRNVQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setName("")
      setMess("")
      setNum("")
  };
  return (
    <div className='hero'>
    <div className="mask">
      <img src={contact} className='into-img' alt=''/>
    </div>
   <div className="content">
    <div className="typing">
    <h2>Contact Me</h2>
    <p>Your Ideas Matter, Let's Bring them to Life</p>
    </div>
   </div>
   <div className="forms">
    <form ref={form} onSubmit={sendEmail} className='email' style={{width:"300px"}}>
    <h4 className="emailtitle" style={{color:"white"}}>CONTACT ME</h4><br /><br />
    <input type="text" className='inputtext' value={name} onChange={(e)=>setName(e.targetvalue)} name="user_name" placeholder='Your Name' style={{width:"250px",borderRadius:"5px"}}/><br />
    <label></label>
    <input type="email" className='email' value={num} onChange={(e)=>setNum(e.targetvalue)} name="user_email" placeholder='Your email ID' style={{width:"250px",borderRadius:"5px"}}/><br />
    <label></label>
    <textarea name="message"  className="message" value={mess} onChange={(e)=>setMess(e.targetvalue)} placeholder='What I need to do for you?' style={{width:"250px",borderRadius:"5px"}}/><br />
    <input className='ebut' type="submit" value="Send" />
  </form>
  </div>
  </div>
  )
}

export default Contact