import './products.css';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const {t, i18n} = useTranslation();
  return (
    <div>
      <div>
        <p>{t('Products.1')}</p>
      </div>
      <div>PRODUCTS</div>
    </div>
  )
}

export default Products