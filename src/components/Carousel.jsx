import React, { useState, useRef } from 'react';
import { Carousel } from 'antd';
import carouselData from '../data/carouselData.json';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.css";

function CarouselComponent() {
    const [slide, setSlide] = useState(0);
    const carouselRef = useRef(null);

    const nextSlide = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    }

    const previousSlide = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    }

    return (
        <div className='carousel'>
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={previousSlide}/>
            <Carousel 
                autoplay 
                autoplaySpeed={5000}
                ref={carouselRef} 
                beforeChange={(from, to) => setSlide(to)}
                dots={false}
            >
                {carouselData.slides.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} alt={image.alt} className='slide'/>
                    </div>
                ))}
            </Carousel>
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
            <span className='indicators'>
                {carouselData.slides.map((_, idx) => (
                    <button 
                        key={idx} 
                        onClick={() => carouselRef.current.goTo(idx)} 
                        className={slide === idx ? "indicator" : "indicator indicator-inactive"}
                    />
                ))}
            </span>
        </div>
    );
};

export default CarouselComponent;


