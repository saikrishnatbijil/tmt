import React from 'react'
import './card.css'

function card(props) {
    return (
        <>
            {props.details.map((value, index) => (
                <div className='cardBody' onClick={() => props.triggerer(value.title)}>
                    <img className='image' src={value.img} alt={value.title} />
                    <h1>{value.title}</h1>
                </div>
            ))}
        </>
    )
}

export default card