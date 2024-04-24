import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import './projects.css'; 

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    const navFromPost = sessionStorage.getItem('navigatedFrom') === 'Projects';
    sessionStorage.removeItem('navigatedFrom'); // Clear after checking
    return navFromPost ? parseInt(localStorage.getItem('currentPage')) || 1 : 1;
  });
  const [limit, setLimit] = useState(parseInt(localStorage.getItem('limit')) || 35); // Default limit

  const fetchUrl = `http://localhost:1337/api/projects?pagination[page]=${currentPage}&pagination[pageSize]=${limit}&populate=*`;

  const { data, loading, error } = useFetch(fetchUrl);
  const projects = data?.data || [];

  useEffect(() => {
    if (data.meta) {
      setPageCount(data.meta.pagination.pageCount);
    }
    // Update localStorage after fetching
    localStorage.setItem('currentPage', currentPage.toString());
    localStorage.setItem('limit', limit.toString());
  }, [data, currentPage, limit]);

  const [pageCount, setPageCount] = useState(0);

  // Function to navigate to the next page
  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pageCount));
  };

  // Function to navigate to the previous page
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Function to handle limit change
  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value));
    setCurrentPage(1); // Reset to first page with new limit
  };

  const renderPageNumbers = () => {
    let pages = [];
    for(let i=1; i<= pageCount; i++){
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={currentPage === i ? 'page-active' : ''}  
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading PDF files: {error.message}</p>;

  return (
    <div className="project-page">
      <h2>PROJECTS</h2>
      <div className='page-limit'>
        <div>Page {currentPage} of {pageCount}</div>
        <select  className='limit-change' onChange={handleLimitChange} value={limit}>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
          <option value="60">60</option>
        </select>
      </div>
      <div className="project-container">
        {projects.map((project) => (
          <Link 
            to={`/details/${project.id}`} 
            key={project.id} 
            className="project-card"
            onClick={() => sessionStorage.setItem('navigatedFrom', 'Projects')}
            >
            {project.attributes.image.data.length > 0 && (
              <div className="project-image-container">
                <img
                  src={`http://localhost:1337${project.attributes.image.data[0].attributes.formats.small.url}`}
                  alt={project.attributes.title}
                  className="project-image"
                />
              </div>
            )}
            <div className="project-info">
              <p className="title">{project.attributes.title}</p>
              <p className='preview'>{project.attributes.preview}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <div className='pagination-number'>{renderPageNumbers()}</div>
        <button onClick={goToNextPage} disabled={currentPage === pageCount}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
