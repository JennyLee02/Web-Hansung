import './contact.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const {t, i18n} = useTranslation();
  return (
    <div>
      <div>
        <p>{t('Contact.1')}</p>
      </div>
      <div>CONTACT</div>
    </div>
  )
}

export default Contact