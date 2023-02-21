import React from 'react'
import './hero.css'
import logo from '../../assets/logo.png'

function hero() {
  return (
    <div className='hero-section'>
      <img className='logo' src={logo} alt="TMT PROPERTIES" />
      <h1 className='mainHeading'>A PLACE WHERE EVERYTHING <br/> CONNECTS...</h1>
    </div>
  )
}

export default hero