import React, {useState, useRef} from 'react';
import './home.css';
import MainHeader from '../../components/MainHeader';
import { About } from './About';
import {Lineup} from './Lineup';
import { useTranslation } from 'react-i18next';
import DotIndicator from '../../components/DotIndicator';
import '../../components/dotIndicator.css';


const Home = () => {
  const [activeSection, setActiveSection] =useState(0);

  // for snap scroll
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();

  function scrollTo(section, index) {
    section.current.scrollIntoView({behavior: "smooth"});
    setActiveSection(index);
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

      <div className='dot-indicators'>
        {[section1, section2, section3].map((section, index) => (
          <DotIndicator 
            key={index} 
            isActive={activeSection === index}
            onClick={() => scrollTo(section, index)}
          />
        ))}
      </div>
    </div>

    
  )
}

export default Home


//내일 해야할일
// 1. 스냅 스크롤 인디케이터 구현
// 2. 홈 화면 반응형 구현
// 3. Footer 구현