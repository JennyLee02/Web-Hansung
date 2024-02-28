import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import "./post.css";

export const Post = () => {
  const { id } = useParams();
  const { loading, error, data } = useFetch(`http://localhost:1337/api/projects/${id}?populate=*`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const renderDescription = (descriptionArray) => {
    return descriptionArray.map((item, index) => (
      <p key={index}>
        {item.children.map((child, childIndex) => (
          // Directly display the text content of each child
          <React.Fragment key={childIndex}>{child.text}</React.Fragment>
        ))}
      </p>
    ));
  };

  const descriptionContent = data?.data?.attributes?.description;


  return (
    <div className="project-detail-page">
        <h2 className='post-title'>{data.data.attributes.title}</h2>
        <p className='sub-title'>{data.data.attributes.preview}</p>
        <div className='post-image-container'>
            <img
                src={`http://localhost:1337${data.data.attributes.image.data[0].attributes.formats.small.url}`} 
                alt={data.data.attributes.title}
                className='post-image'
            />
        </div>
        <div className='description'>
          {descriptionContent && renderDescription(descriptionContent)}
        </div>


    </div>
  );
};


