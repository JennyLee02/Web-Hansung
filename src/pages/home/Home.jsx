import React, {useState, useRef} from 'react';
import './home.css';
import MainHeader from '../../components/MainHeader';
import { About } from './About';
import {Lineup} from './Lineup';
import { useTranslation } from 'react-i18next';


const Home = () => {

  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();

  function scrollTo(section) {
    section.current.scrollIntoView({behavior: "smooth"});
  }

  // for multi language support
  const {t, i18n} = useTranslation();


  return (
    <div>
      <div className='snap-container'>
        <div ref={section1}>
          <MainHeader scrollTo={scrollTo} goToSectionRef={section2}/>
        </div>

        <div ref={section2}>
          <About scrollTo={scrollTo} goToSectionRef={section3}/>
        </div>

        <div ref={section3}>
          <Lineup/>
        </div>
        
      </div>
    </div>

    
  )
}

export default Home