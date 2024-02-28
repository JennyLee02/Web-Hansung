import React, {useState} from 'react';
import './projects.css';
import useFetch from '../../hooks/useFetch';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactPaginate from 'react-paginate';

const Projects = () => {
  const {t, i18n} = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 24;

  //useFetch
  const {loading, error, data} = useFetch('http://localhost:1337/api/projects?populate=*')


  // Handle page change
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  // change this to proper loading and error msg later
  if (loading) return <p>Loaindg...</p>;
  if (error) return <p>Error: {error.message || 'An unknown error occurred'}</p>;

  // Calculate the number of pages
  const pageCount = data ? Math.ceil(data.data.length / projectsPerPage) : 0;

  // Get projects for the current page
  const projectsDisplayed = data ? data.data.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  ) : [];


  return (
    <div className='project-page'>
      <h2>PROJECTS</h2>
        <div className='project-container'>
          {projectsDisplayed.map((project) => {
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
                  </div>
                  
                </Link>
          )
          })}
        </div>
        {/* Pagination */}
        <ReactPaginate
          previousLabel={'← Previous'}
          nextLabel={'Next →'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          forcePage={currentPage}
        />
      </div>
  )
}

export default Projects