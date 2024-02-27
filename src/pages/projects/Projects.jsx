import './projects.css';
import useFetch from '../../hooks/useFetch';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const {t, i18n} = useTranslation();

  //useFetch
  const {loading, error, data} = useFetch('http://localhost:1337/api/projects?populate=*')

  // change this to proper loading and error msg later
  if (loading) return <p>Loaindg...</p>;
  if (error) return <p>Error: {error.message || 'An unknown error occurred'}</p>;

  return (
    <div className='project-page'>
      <h2>PROJECTS</h2>
        <div className='project-container'>
          {data && data.data && data.data.map((project) => {
            const formattedDate = new Date(project.attributes.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            });
            
            return(
                <Link to={`/details/${project.id}`} key={project.id} className='project-card'>
                  {project.attributes.image.data.length > 0 && (
                    <div className='project-image-container'>
                      <img
                        src={`http://localhost:1337${project.attributes.image.data[0].attributes.formats.small.url}`} 
                        alt={project.attributes.title}
                        className='project-image'
                      />
                    </div>
                    
                  )}
                  <div className='project-info'>
                    <div className='project-meta'>
                      <span className="project-date">{formattedDate}</span>
                    </div>
                    <p className='title'>{project.attributes.title}</p>
                    <p className='preview'>{project.attributes.preview}</p>
                    {/* <Link to={`/details/${project.id}`}>Read More</Link> */}
                  </div>
                  
                </Link>

          )
          })}
        </div>
      </div>
  )
}

export default Projects