import './manufacturing.css';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components/Footer';

const Manufacturing = () => {
  const {t, i18n} = useTranslation();
  return (
    <div>
      <div>
        <p>{t('Manufacturing.1')}</p>
      </div>
      <div>MANUFACTURING</div>
      <Footer/>
    </div>
  )
}

export default Manufacturing