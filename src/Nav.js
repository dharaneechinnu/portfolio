import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  const [color,setcolor] = useState(false);
  const changeColor =() => {
    if(window.scrollY >=50){
      setcolor(true);
    }
    else{
      setcolor(false)
    }
  };
  window.addEventListener("scroll",changeColor);
  return (
   <div className={color ? "header header-bg": "header"}>
   
    <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/skill">Skill</Link></li>
        <li><Link to="/education">Education</Link></li>

        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
  
   </div>
  )
}

export default Nav