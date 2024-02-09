import React, {useState} from 'react';
import "./tech_description.css";
import tech_hotspot from "../../images/Manufacturing/tech_hotspot_cr.png";
import { Hotspot_card } from '../../components/Hotspot_card';
import contentData from "../../data/hotspotData.json";
import { IoClose } from "react-icons/io5";

export const Tech_description = () => {
  const [currentContentId, setCurrentContentId] = useState(null);

  const handleBackClick = () => {
    setCurrentContentId(null);
  }

  const handleClick = (id) => {
    // Toggle functionality: hide if the same button is clicked again
    if (currentContentId === id) {
      setCurrentContentId(null); // Hide the content
    } else {
      setCurrentContentId(id); // Show new content
    }
  };

  const currentContent = currentContentId !== null ? contentData.find(content => content.id === currentContentId) : null;


  return (
    <div className='tech_page'>
        <div className='tech_title'>HANSUNG's TECHNOLOGY</div>
        <div className='tech_container'>
            <img src={tech_hotspot} alt='모듈러 건축 이미지' className='tech_image'/>
              {contentData.map((content) => (
                <button 
                  // if the button is active, className == active-btn
                  className={`hotspot-position-${content.id} ${currentContentId === content.id ? 'active-btn' : ''}`} 
                  key={content.id} 
                  onClick={() => handleClick(content.id)}
                >
                  {currentContentId === content.id ? <IoClose /> : content.id}
                </button>
              ))}
            
        </div>
        {currentContent && (
            <Hotspot_card
              className="hotspot-card" 
              title={currentContent.title} 
              description={currentContent.description} 
              image={currentContent.image}
              onBackClick={handleBackClick}
            />
          )}
    </div>
  )
}
