import React from 'react'
import './card.css'
import car from '../../assets/rent-a-car.jpg'

function card(props) {
    return (
        <>
            {props.details.map((value, index) => (
                <div className='cardBody'>
                    <img className='image' src={value.img} alt={value.title} />
                    <h1>{value.title}</h1>
                </div>
            ))}
        </>
    )
}

export default card