import React from 'react'
import edu from "./Img/edu.jpg"

const Education = () => {
  return (
    <div className='hero'>
      <div className="mask">
        <img src={edu} className='into-img' alt=''/>
      </div>
     <div className="content">
      <div className="typing">
      <h2>Education & Experience </h2>
      <p>Passionate Educator on a Journey of Knowledge</p>
      </div>
     </div>
     <div className="who">
      <h2 className='titlecon'>Education</h2>
       <p>Sree Saravana Niketan, Nerinjipettai—Higher Secondary
2022 Batch</p>
<p>SRM University, Ramapuram — BTech Information Technology
2022 - 2026 Batch</p><br></br><br></br>
<h2 className='titlecon'>Experience</h2>
<p>I have done One Intership with Bharat Inter </p>
    </div>
    </div>
  )
}

export default Education