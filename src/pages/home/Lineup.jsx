import {useState, React} from 'react';
import {motion} from 'framer-motion';
import {LineupCard} from './Lineup_card';
import HomeLogo from '../../images/Home/HomeLogo.png';
import './lineup.css';

export const Lineup = () => {
  return (
    <div className='lineup-container'>
        <img src={HomeLogo} className='lineup-logo' alt='한성모듈러 로고'/>
        <LineupCard/>
    </div>
  )
}
