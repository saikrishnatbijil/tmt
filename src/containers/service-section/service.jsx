import React from 'react'
import './service.css'
import { Card } from '../../components'
import servicesData from '../../servicesData'

function service() {
  return (
    <div className='services-section'>
        <h1 className='servicesHeading'>Our Services.</h1>
        <div className="card-group">
            <Card details={servicesData}/>
        </div>
    </div>
  )
}

export default service