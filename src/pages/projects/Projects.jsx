import './projects.css';
import useFetch from '../../hooks/useFetch';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const {t, i18n} = useTranslation();
  return (
    <div>
      <div>
        <p>{t('Projects.1')}</p>
      </div>
      <div>PROJECTS</div>
    </div>
  )
}

export default Projects