import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo_Footer from '../images/footer_logo.png';
import './footer.css';


export const Footer = () => {
    const {t, i18n} = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={Logo_Footer} alt='한성모듈러 로고' className='footer_logo'/>
        <p>© 2024 HANSUNG MODULAR. All Rights Reserved.</p>
      </div>
    </footer>
  )
}


