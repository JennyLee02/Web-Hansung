import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './projects.css'; 

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(35); // Default limit
  const [projects, setProjects] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(`http://localhost:1337/api/projects?pagination[page]=${currentPage}&pagination[pageSize]=${limit}&populate=*`);
      const data = await response.json();

      setProjects(data.data);
      setPageCount(data.meta.pagination.pageCount); // Update total page count based on response
    };

    fetchProjects();
  }, [currentPage, limit]); // Re-fetch data when currentPage or limit changes

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
    setLimit(e.target.value);
    setCurrentPage(1); // Reset to first page with new limit
  };

  return (
    <div className="project-page">
      <h2>PROJECTS</h2>
      <select onChange={handleLimitChange} value={limit}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="35">35</option>
        <option value="50">50</option>
      </select>
      <div className="project-container">
        {projects.map((project) => (
          <Link to={`/details/${project.id}`} key={project.id} className="project-card">
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
              {/* Add more project details here */}
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        Page {currentPage} of {pageCount}
        <button onClick={goToNextPage} disabled={currentPage === pageCount}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
