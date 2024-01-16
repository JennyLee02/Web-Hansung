import React from 'react';
import CarouselComponent from "./Carousel"
import slides from "../data/carouselData.json";

const Header = () => {
  return (
    <header className='main__header'>
      <CarouselComponent data={slides}/>
    </header>
  )
}

export default Header