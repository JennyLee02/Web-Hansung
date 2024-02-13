import React from 'react';
import './manufacturing_cards.css';
import M_Data from '../../data/manufacturingData.json';
import { M_card } from './M_card';
import { useTranslation } from 'react-i18next';

export const Manufacturing_cards = () => {
    const {t, i18n} = useTranslation();
  return (
    <div className='MCard-page'>
        <h2 className='MPage-title'>MODULAR METHOD</h2>
        <div className='Mcard-container'>
            {M_Data.map((card)=>(
                <M_card
                    key={card.id}
                    image={card.image}
                    alt={card.alt}
                    icon={card.icon}
                    title={card.title}
                    description={t(card.description)}
                />
            ))}
        </div>
    </div>
  )
}
