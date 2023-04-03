import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'

function navbar({ handleSwitch }) {

  function showMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.display = "block"
    navLinks.style.right = "0"
  }

  function hideMenu() {
    var navLinks = document.getElementById("navLinks");  
    navLinks.style.right = "-200px"
    navLinks.style.display = "none"
  }

  return (
    <div className='navbar'>
      <div className="navLinks">
        <a href="/"><img src={logo} alt="TMT PROPERTIES" /></a>
        <ul id='navLinks'>
          <div className="close" onClick={hideMenu}></div>
          <li><p onClick={()=>handleSwitch(true)}>HOME</p></li>
          <li><p onClick={()=>handleSwitch(false)}>CONTACT US</p></li>
        </ul>
        <div className="open" onClick={showMenu}></div>
      </div>
    </div>
  )
}

export default navbar