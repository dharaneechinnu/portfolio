import React, { useState } from 'react'
import { FaBars,FaXmark} from "react-icons/fa6";
import { Link } from 'react-router-dom'
const Nav = () => {
  const [click,setclick] = useState(false);
  const handleclick = () => setclick(!click);
  const [color,setcolor] = useState(false);
  const changeColor =() => {
    if(window.scrollY >=100){
      setcolor(true);
    }
    else{
      setcolor(false)
    }
  };
  window.addEventListener("scroll",changeColor);
  return (
   <div className={color ? "header header-bg": "header"}>
   <Link to="/"> <h2>Portfolio</h2></Link>
    <ul className={click? "nav-menu active" : "nav-menu"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/skill">My Skill</Link></li>
        <li><Link to="/education">Education</Link></li>

        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
   <div className="hamburger" onClick={handleclick}>
    {click ? (

    <FaXmark size={20} style={{color:'white'}}/>):( 
    <FaBars size={20} style={{color:'white'}}/>
  )}
   </div>
   </div>
  )
}

export default Nav