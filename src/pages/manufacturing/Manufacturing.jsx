import './manufacturing.css';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components/Footer';
import { Manufacturing_intro } from './Manufacturing_intro';
import { Manufacturing_cards } from './Manufacturing_cards';

const Manufacturing = () => {
  const {t, i18n} = useTranslation();
  return (
    <div>
      <Manufacturing_intro/>
      <Manufacturing_cards/>
      <Footer/>
    </div>
  )
}

export default Manufacturing