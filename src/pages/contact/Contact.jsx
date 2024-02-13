import './contact.css';
import { useTranslation } from 'react-i18next';
import { Location } from './Location';

const Contact = () => {
  const {t, i18n} = useTranslation();
  return (
    <div>
      <Location/>
    </div>
  )
}

export default Contact