import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import {Link} from 'react-router-dom';
import "./post.css";

export const Post = () => {
    const navigate = useNavigate();
  const location = useLocation();

  const { id } = useParams();
  const { loading, error, data } = useFetch(`http://localhost:1337/api/projects/${id}?populate=*`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const description = data.data.attributes.description;

  const handleBack = () => {
    navigate('/projects', {state: {retainState: location.state?.fromProjects}});
  };

  return (
    <div className="project-detail-page">
        <div className='post-header'>
            <button onClick={handleBack} className='back-btn'>← BACK</button>
            <h2 className='post-title'>{data.data.attributes.title}</h2>
        </div>
        <p className='sub-title'>{data.data.attributes.preview}</p>
        <div className='post-image-container'>
            <img
                src={`http://localhost:1337${data.data.attributes.image.data[0].attributes.formats.small.url}`} 
                alt={data.data.attributes.title}
                className='post-image'
            />
        </div>
        <div className='description'>
            <div className='description' dangerouslySetInnerHTML={{ __html: description }} />
        </div>


    </div>
  );
};


