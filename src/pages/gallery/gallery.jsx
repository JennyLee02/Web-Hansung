import './gallery.css';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const {t, i18n} = useTranslation();
  return (
    <div>
      <div>
        <p>{t('Gallery.1')}</p>
      </div>
      <div>GALLERY</div>
    </div>
  )
}

export default Gallery