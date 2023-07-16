import React from 'react'
import './card.css'

function card(props) {
    return (
        <>
            {props.details.map((value, index) => (
                <div className='specCardBody' onClick={() => props.triggerer(value.title, value.subServices, value.images)}>
                    <img className='specImage' src={value.img} alt={value.title} />
                    <h1>{value.title}</h1>
                </div>
            ))}
        </>
    )
}

export default card