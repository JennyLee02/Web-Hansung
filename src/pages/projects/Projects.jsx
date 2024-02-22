import './projects.css';
import useFetch from '../../hooks/useFetch';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const {t, i18n} = useTranslation();

  //useFetch
  const {loading, error, data} = useFetch('http://localhost:1337/api/projects')

  // change this to proper loading and error msg later
  if (loading) return <p>Loaindg...</p>;
  if (error) return <p>Error: {error.message || 'An unknown error occurred'}</p>;

  console.log(data)
  return (
    <div>
      {data && data.data && data.data.map((project) => (
        <div key={project.id} className='project-card'>
          <h2 className='title'>{project.attributes.title}</h2>
          <p className='preview'>{project.attributes.preview}</p>
          <Link to={`/details/${project.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  )
}

export default Projects