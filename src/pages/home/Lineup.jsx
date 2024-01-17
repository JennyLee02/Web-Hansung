import {useState, React} from 'react';
import {LineupCard} from './Lineup_card';
import cardData from '../../data/lineupCardData.json';
import HomeLogo from '../../images/Home/HomeLogo.png';
import './lineup.css';

export const Lineup = () => {
  return (
    <div className='lineup-container'>
        <img src={HomeLogo} className='lineup-logo' alt='한성모듈러 로고'/>
        <div>
            {cardData.map(card => (
                <LineupCard
                    key={card.id}
                    defaultImage={card.defaultImage}
                    expandedImage={card.expandedImage}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    </div>
  )
}
