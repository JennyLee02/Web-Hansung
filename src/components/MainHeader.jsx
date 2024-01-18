import React from 'react';
import CarouselComponent from "./Carousel"
import slides from "../data/carouselData.json";
import { CgArrowLongDown } from "react-icons/cg";
import './Carousel.css';
import '../pages/home/home.css';

const MainHeader = ({scrollTo, goToSectionRef}) => {
  return (
    <div className='main-header'>
      <CarouselComponent data={slides}/>
      <CgArrowLongDown className='down-arrow' onClick={() => scrollTo(goToSectionRef)}/>

    </div>
    
  )
}

export default MainHeader