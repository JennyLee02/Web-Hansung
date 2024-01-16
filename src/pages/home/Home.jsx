import './home.css';
import MainHeader from '../../components/MainHeader';
import { useTranslation } from 'react-i18next';


const Home = () => {
  const {t, i18n} = useTranslation();
  return (
    <div>
      <MainHeader/>
      <div>
        <p>{t('Intro.1')}</p>
      </div>
    </div>
    
  )
}

export default Home