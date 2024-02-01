import React from 'react';
import './manufacturing_cards.css';
import M_Data from '../../data/manufacturingData.json';
import { M_card } from './M_card';

export const Manufacturing_cards = () => {
  return (
    <div className='MCard-page'>
        <div className='MPage-title'>MODULAR METHOD</div>
        <div className='Mcard-container'>
            {M_Data.map((card)=>(
                <M_card
                    key={card.id}
                    image={card.image}
                    alt={card.alt}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    </div>
  )
}
