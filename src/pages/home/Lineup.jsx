import {useState, React} from 'react';
import {LineupCard} from './Lineup_card';
import cardData from '../../data/lineupCardData.json';
import HomeLogo from '../../images/Home/HomeLogo.png';
import './lineup.css';

// export const Lineup = () => {
//   return (
//     <div className='lineup-container'>
//         <img src={HomeLogo} className='lineup-logo' alt='한성모듈러 로고'/>
//         <div className='content-row'>
//             {cardData.map(card => (
//                 <LineupCard
//                     key={card.id}
//                     defaultImage={card.defaultImage}
//                     expandedImage={card.expandedImage}
//                     title={card.title}
//                     description={card.description}
//                 />
//             ))}
//         </div>
//     </div>
//   )
// }

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
                    />
                ))}
            </div>
        </div>
    );
}