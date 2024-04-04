import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import StrapiCarousel from '../../components/StrapiCarousel';
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
          <StrapiCarousel itemId={id} />
        </div>
       
        <div className='details'>
          {data.data.attributes.name && 
            (<div className='name'>
              <span className='detail_title three-letter'>현 장 명</span>
              <span className='detail_data'>{data.data.attributes.name}</span>
            </div>)}
          {data.data.attributes.location &&
            (<div className='location'>
              <span className='detail_title two-letter'>위 치</span>
              <span className='detail_data'>{data.data.attributes.location}</span>
            </div>)}
          {data.data.attributes.purpose &&
            (<div className='purpose'>
              <span className='detail_title two-letter'>용 도</span>
              <span className='detail_data'> {data.data.attributes.purpose}</span>
            </div>)}
          {data.data.attributes.land_area &&
            (<div className='land_area'>
              <span className='detail_title'>대지면적</span>
              <span className='detail_data'>{data.data.attributes.land_area}</span>
            </div>)}
          {data.data.attributes.building_area &&
            (<div className='building_area'>
              <span className='detail_title'>건축면적</span>
              <span className='detail_data'> {data.data.attributes.building_area}</span>
            </div>)}
          {data.data.attributes.scale &&
            (<div className='scale'>
              <span className='detail_title two-letter'>규 모</span>
              <span className='detail_data'>{data.data.attributes.scale}</span>
            </div>)}
          {data.data.attributes.structure &&
            (<div className='structure'>
              <span className='detail_title two-letter'>구 조</span>
              <span className='detail_data'>{data.data.attributes.structure}</span>
            </div>)}
          {data.data.attributes.finisher &&
            (<div className='finisher'>
              <span className='detail_title'>외부마감</span>
              <span className='detail_data'>{data.data.attributes.finisher}</span>
            </div>)}
          {data.data.attributes.designed_by &&
            (<div className='designer'>
              <span className='detail_title two-letter'>설 계</span>
              <span className='detail_data'>{data.data.attributes.designed_by}</span>
            </div>)}
        </div>


    </div>
  );
};


