import React, {useState, useEffect, useRef} from 'react';
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
  
  useEffect(() => {
    const options = {
      threshold: 0.5, 
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          setActiveSection(index);
        }
      });
    }, options);
  
    [section1, section2, section3].forEach((section, index) => {
      if (section.current) {
        section.current.setAttribute('data-index', index);
        observer.observe(section.current);
      }
    });
  
    return () => {
      [section1, section2, section3].forEach((section) => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
    };
  }, []); 
  

  // for multi language support
  const {t, i18n} = useTranslation();


  return (
    <div>
      <div className='snap-container'>
        <div ref={section1}>
          <MainHeader scrollTo={scrollTo} goToSectionRef={section2} data-index='0'/>
        </div>

        <div ref={section2}>
          <About scrollTo={scrollTo} goToSectionRef={section3} data-index='1'/>
        </div>

        <div ref={section3} data-index='2'>
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
// 2. 홈 화면 반응형 구현
// 3. Footer 구현
// 4.  스냅스크롤 인디케이터 업데이트 버그