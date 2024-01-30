import {useState, React} from 'react';
import {LineupCard} from './Lineup_card';
import cardData from '../../data/lineupCardData.json';
import HomeLogo from '../../images/Home/HomeLogo.png';
import './lineup.css';
import {Footer} from '../../components/Footer';



export const Lineup = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleCard = (cardId) => {
        setExpandedCard(expandedCard === cardId ? null : cardId);
    };

    return (
        <div className='lineup-container'>
            <img src={HomeLogo} className='lineup-logo' alt='Home Logo'/>
            <div className='card-container'>
                {cardData.map((card) => (
                    <LineupCard
                        key={card.id}
                        {...card}
                        isOpen={expandedCard === card.id}
                        toggleOpen={() => toggleCard(card.id)}
                        hideTitle={expandedCard !== null && expandedCard !== card.id}
                    />
                ))}
            </div>
            <div>
                {/* <Footer/> */}
            </div>
        </div>
    );
}