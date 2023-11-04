import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from "./Img/port1.jpg"
import { Nav } from 'react-bootstrap'


const Home = () => {
  return (
    <>
    <Nav/>
    <div className='hero'>
   
      <div className="mask">
        <img src={logo1} className='into-img' alt=''/>
      </div>
     <div className="content">
      <div className="typing">
      <p>Hey, I'M Dharaneedharan</p>
      <h2>Junior Front-End Developer </h2>
      </div>
      <div className="btns">
       <Link to="/contact" className='btn btn-light'>Contact Me</Link>
      </div>
     </div>
    </div>
    </>
  )
}

export default Home