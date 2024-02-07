import React from 'react';
import "./hotspot_card.css";

export const Hotspot_card = ({title, image, description}) => {
  return (
    <div className='hotspot-card-container'>
        <h2>{title}</h2>
        <img className='hotspot-card-img' src={image} alt={title}/>
        <p>{description}</p>
  </div>
  )
}
