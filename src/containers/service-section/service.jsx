import React from 'react'
import './service.css'
import { Card, ViewCard } from '../../components'
import servicesData from '../../servicesData'

function service() {

  function cardsTriggered(card) {
    console.log('Hello :: '+card)
  }

  return (
    <>
    <ViewCard />
    <div className='services-section'>
        <h1 className='servicesHeading'>Our Services.</h1>
        <div className="card-group">
            <Card details={servicesData} triggerer={cardsTriggered}/>
        </div>
    </div>
    </>
  )
}

export default service