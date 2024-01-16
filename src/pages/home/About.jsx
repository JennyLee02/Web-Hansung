import React from 'react';
import TeamPhoto from '../../images/Home/TeamPhoto.jpg';
import './about.css';
import HomeLogo from '../../images/Home/HomeLogo.png';
import { useTranslation } from 'react-i18next';

export const About = () => {
    const {t, i18n} = useTranslation();
  return (
    <div className='about-container'>
        <img src={HomeLogo} className='homeLogo' alt='한성모듈러 로고'/>
        <img src={TeamPhoto} className='teamPhoto' alt='한성모듈러 팀 사진'/>
        <p className='about-text'>{t('Home.about')}</p>
    </div>
  )
}
