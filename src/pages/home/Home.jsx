import './home.css';
import MainHeader from '../../components/MainHeader';
import { About } from './About';
import { useTranslation } from 'react-i18next';


const Home = () => {
  const {t, i18n} = useTranslation();
  return (
    <div>
      <MainHeader/>
      <About/>
    </div>
    
  )
}

export default Home