import { useState } from 'react'
import React from 'react'
import './service.css'
import { Card, ViewCard } from '../../components'
import servicesData from '../../servicesData'

function Service() {
  const [clickedService, setClickedService] = useState('')
  const [clickedServiceServices, setClickedServiceServices] = useState([])

  function cardsTriggered(card, subServices) {
    if(card === 'Real-Estate') {
      console.log('Hello :: '+card)
      setClickedService(card)
      setClickedServiceServices(subServices)
      const modal = document.querySelector("[data-model]");
  
      if (modal) {
        modal.showModal();
      }
    }
  }

  return (
    <>
    <ViewCard name={clickedService} subServices={clickedServiceServices}/>
    <div className='services-section'>
        <h1 className='servicesHeading'>Our Services.</h1>
        <div className="card-group">
            <Card details={servicesData} triggerer={cardsTriggered}/>
        </div>
    </div>
    </>
  )
}

export default Service