import React from 'react';
import { useTranslation } from 'react-i18next';
import './manufacturing_intro.css';
import offsite from '../../images/Manufacturing/intro1.png';
import onsite from '../../images/Manufacturing/intro2.png';

export const Manufacturing_intro = () => {
    const {t, i18n} = useTranslation();

  return (
    <div className='intro_container'>
      {/* offsite */}
      <div className='offsite_content'>
        <div className='offsite_text'>
          <h2 className='offsite_title'>OFF-SITE MANUFACTURING</h2>
          <div className='offsite_description'>{t('Manufacturing.intro.offsite')}</div>
        </div>
          <img className='offsite_image' src={offsite} alt='offsite image'/>
      </div>
      
      {/* onsite */}
      <div className='onsite_content'>
        <img className='onsite_image' src={onsite} alt='onsite image'/>
        <div className='onsite_text'>
          <h2 className='onsite_title'>ON-SITE CONSTRUCTION</h2>
          <div className='onsite_description'>{t('Manufacturing.intro.onsite')}</div>
        </div>
      </div>

    </div>
  )
}
