import './manufacturing.css';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components/Footer';
import { Manufacturing_intro } from './Manufacturing_intro';

const Manufacturing = () => {
  const {t, i18n} = useTranslation();
  return (
    <div>
      <div>
        <p>{t('Manufacturing.1')}</p>
      </div>
      <Manufacturing_intro/>
      <Footer/>
    </div>
  )
}

export default Manufacturing