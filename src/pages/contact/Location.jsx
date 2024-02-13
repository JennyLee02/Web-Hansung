import React from 'react';
import './location.css';
import { useTranslation } from 'react-i18next';

export const Location = () => {
    const {t} = useTranslation();
  return (
    <div className='location-container'>
        <div className='location-content'>
            <h2>LOCATION</h2>
            <div className='location-info'>
                <div className='location-map'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2335.654602511015!2d127.0992617175619!3d37.853045789391835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cdac6374b13f3%3A0x687b353c5e27a55e!2z7ZWc7ISx66qo65OI65-sKOyjvCk!5e0!3m2!1sen!2sca!4v1707782053311!5m2!1sen!2sca" 
                        width="950" 
                        height="500" 
                        style={{ border: "0" }}
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className='location-text'>
                    <p>{t('Contact.address')}</p>
                    <p>Tel: 031-866-2335</p>
                    <p>email: hasmodular@daum.net</p>
                </div>
                <hr className='divider'/>
            </div>
        </div>
    </div>
  )
}

