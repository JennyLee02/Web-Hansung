import React, {useState, useRef, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import blueprintData from '../../../data/kananeData.json';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './kanane_type.css';

import { EffectCoverflow, Pagination, Navigation} from 'swiper/modules';


  const tabs = ['Extended', 'Terrace1','Terrace2', 'Two Room', 'Master Room'];


const Kanane_type = () => {
    const [activeSlide, setActiveSlide] = useState(blueprintData[2]);

    const handleSlideChange = (swiper) => {
        setActiveSlide(blueprintData[swiper.realIndex]);
      };


    const slides = [
        {name: 'Extended', blueprint: '/images/Kanane/extend.png'},
        {name: 'Terrace1', blueprint: '/images/Kanane/terrace.png'},
        {name: 'Terrace2', blueprint: '/images/Kanane/terrace2.png'},
        {name: 'Two Room', blueprint: '/images/Kanane/tworoom.png'},
        {name: 'Master Room', blueprint: '/images/Kanane/masterroom.png'}
      ];
      
    
  return (
    <div className='swiper-container'>
      <Swiper
       onSlideChange={handleSlideChange}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView='auto'
      loop={true}
      coverflowEffect={{
        rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
      }}
      modules={[EffectCoverflow, Navigation, Pagination]}
      navigation={{
        nextE1:'.swiper-btn-next',
        prevE1:'.swiper-btn-prev',
        clickable:true,
      }}
      initialSlide={2}
      className="TextSwiper"
    >
       {slides.map((slide, index) => (
          <SwiperSlide key={index}>
                <h2 className='types'>{slide.name}</h2>
          </SwiperSlide>
        ))}
      <div className="slider-controller">
        <div className="swiper-btn-prev slider-arrow">
            <MdArrowBackIos className='arrow-back'></MdArrowBackIos>
        </div>
        <div className="swiper-btn-next slider-arrow">
            <MdArrowForwardIos className='arrow-forward'></MdArrowForwardIos>
        </div>
      </div>
    </Swiper>
    <div className="blueprint-container">
        <img 
          src={activeSlide.blueprint} 
          alt={`${activeSlide.name} blueprint`} 
          className="blueprint-image"
        />
    </div>
    </div>
  );
}

export default Kanane_type