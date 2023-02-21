import React from 'react'
import './home.css'
import { HeroSection, ServiceSection, PartnersSection } from '../../containers'
import { Navbar, Footer } from '../../components'

function home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <PartnersSection />
      <Footer />
    </div>
  )
}

export default home