import React from 'react'
import skill from "./Img/skill.jpg"
const Skill = () => {
  return (
    <div className='hero'>
    <div className="mask">
      <img src={skill} className='into-img' alt=''/>
    </div>
   <div className="content">
    <div className="typing">
    <h2>Skill About Me</h2>
    <p>Bringing Ideas to Life through Design and Development</p>
    </div>
   </div>
   <div className="who">
    <h2 className='titlecon'>My Skill</h2>
    <ul><li>Proficient in <strong>HTML</strong>, creating the structural foundation of web pages.</li></ul>
    <ul><li>Skilled in <strong>CSS</strong>styling web pages to enhance design and user experience.</li></ul>
    <ul><li>Strong grasp of <strong>JavaScript</strong> for creating interactive and dynamic web applications.</li></ul>
    <ul><li>Experience in building modern and efficient user interfaces using <strong>ReactJS</strong> library.</li></ul>
    <ul><li>Familiarity with <strong>Python</strong> programming language and basic concepts.</li></ul>
    <ul><li>ompetent in using <strong>Git</strong> version control and GitHub for collaborative development and project management.</li></ul>
  </div>
  </div>
  )
}

export default Skill