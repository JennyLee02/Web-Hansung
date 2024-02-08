import React, {useState} from 'react';
import "./tech_description.css";
import tech_hotspot from "../../images/Manufacturing/tech_hotspot_cr.png";
import { Hotspot_card } from '../../components/Hotspot_card';
import contentData from "../../data/hotspotData.json";

export const Tech_description = () => {
  const [currentContentId, setCurrentContentId] = useState(null);

  const handleClick = (id) => {
    setCurrentContentId(id);
  };

  // Default to first content
  const currentContent = contentData.find(content => content.id === currentContentId) || contentData[0]; 


  return (
    <div className='tech_page'>
        <div className='tech_title'>HANSUNG's TECHNOLOGY</div>
        <div className='tech_container'>
          <div className='image-wrapper'>
            <img src={tech_hotspot} alt='모듈러 건축 이미지' className='tech_image'/>
              {contentData.map((content) => (
                <button 
                  className={`hotspot-position-${content.id}`} 
                  key={content.id} 
                  onClick={() => handleClick(content.id)}
                >
                  {content.id}
                </button>
              ))}
          </div>
            
            <Hotspot_card 
              title={currentContent.title} 
              description={currentContent.description} 
              image={currentContent.image}
            />
            
        </div>
    </div>
  )
}
