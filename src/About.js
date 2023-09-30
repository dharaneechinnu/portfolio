import React from 'react'
import logo2 from "./Img/about.jpg"
const About = () => {
  return (
    <div className='hero'>
      <div className="mask">
        <img src={logo2} className='into-img' alt=''/>
      </div>
     <div className="content">
      <div className="typing">
      <h2>About Me</h2>
      <p>i'M Junior Front-end Developer</p>
      </div>
     </div>
     <div className="who">
      <h2 className='titlecon'>Who am I</h2>
      <p>Hello! I'm Dharaneedharan,<br></br> a passionate individual with a zest for life. I'm an avid learner, always eager to<br></br>    explore new horizons and expand my knowledge.Creativity fuels my soul, whether<br></br> through writing, art, or Desing Website. <br></br></p>
      
    </div>
    </div>
  )
}

export default About