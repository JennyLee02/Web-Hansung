import './contact.css';
import { useTranslation } from 'react-i18next';
import { Location } from './Location';
import { Email } from './Email';

const Contact = () => {
  const {t, i18n} = useTranslation();
  return (
    <div>
      <Location/>
      <Email/>
    </div>
  )
}

export default Contact