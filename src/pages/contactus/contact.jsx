import React from 'react'
import './contact.css'
import { Navbar, Footer } from '../../components'
import { ContactUsSection } from '../../containers'

function contact() {
  return (
    <div>
        <Navbar />
        <ContactUsSection />
        <Footer />
    </div>
  )
}

export default contact