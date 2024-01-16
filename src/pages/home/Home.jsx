import './home.css';
import MainHeader from '../../components/MainHeader';
import { About } from './About';
import {Lineup} from './Lineup';
import { useTranslation } from 'react-i18next';


const Home = () => {
  const {t, i18n} = useTranslation();
  return (
    <div>
      <MainHeader/>
      <About/>
      <Lineup/>
    </div>
    
  )
}

export default Home