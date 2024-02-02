import React from 'react';
import "./tech_description.css";
import tech_hotspot from "../../images/Manufacturing/tech_hotspot.png";
import street_bg from "../../images/Manufacturing/street_bg.jpeg";

export const Tech_description = () => {
  return (
    <div className='tech_page'>
        <div className='tech_title'>HANSUNG's TECHNOLOGY</div>
        {/* <img src={street_bg} alt='거리 이미지' className='street_bg'/> */}
        <div className='tech_container'>
            <img src={tech_hotspot} alt='모듈러 건축 이미지' className='tech_image'/>
        </div>
    </div>
  )
}
