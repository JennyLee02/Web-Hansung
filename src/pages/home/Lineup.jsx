import {useState, React} from 'react';
import {LineupCard} from './Lineup_card';
import { useTranslation } from 'react-i18next';
import cardData from '../../data/lineupCardData.json';
import HomeLogo from '../../images/Home/HomeLogo.png';
import './lineup.css';
import {Footer} from '../../components/Footer';



export const Lineup = () => {
    const {t, i18n} = useTranslation();
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
                        defaultImage={card.defaultImage}
                        expandedImage={card.expandedImage}
                        title={card.title}
                        description={t(card.description)}
                        isOpen={expandedCard === card.id}
                        toggleOpen={() => toggleCard(card.id)}
                        hideTitle={expandedCard !== null && expandedCard !== card.id}
                    />
                ))}
            </div>
        </div>
    );
}