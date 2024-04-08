import React, {useState, useEffect, useRef} from 'react';
import './manufacturing.css';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components/Footer';
import { Manufacturing_intro } from './Manufacturing_intro';
import { Manufacturing_cards } from './Manufacturing_cards';
import { Tech_description } from './Tech_description';
import Connector from './Connector';
import DotIndicator from '../../components/DotIndicator';


const Manufacturing = () => {
  const [activeSection, setActiveSection] = useState(0);

  // for snap scroll
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();

  function scrollTo(section, index) {
    section.current.scrollIntoView({behavior: "smooth"});
    setActiveSection(index);
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        console.log(entry); // Log each entry to see if intersections are detected
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          setActiveSection(index);
        }
      });
    }, {threshold: 0.5});
  
    [section1, section2, section3, section4].forEach((section, index) => {
      if (section.current) {
        section.current.setAttribute('data-index', index);
        observer.observe(section.current);
      }
    });
  
    return () => {
      [section1, section2, section3, section4].forEach((section) => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
    };
  }, []); 

  //multilanguage support
  const {t, i18n} = useTranslation();
  return (

    <div>
      <div className='manufacturing-snap-container'>
        <div ref={section1}>
          <Manufacturing_intro scrollTo={scrollTo} goToSectionRef={section2} data-index='0'/>
        </div>

        <div ref={section2}>
          <Manufacturing_cards scrollTo={scrollTo} goToSectionRef={section3} data-index='1'/>
        </div>

        <div ref={section3} data-index='2'>
          <Connector/>
        </div>

        <div ref={section4} data-index='3'> 
          <Tech_description/>
        </div>
      </div>


      <div className='dot-indicators'>
        {[section1, section2, section3, section4].map((section, index) => (
          <DotIndicator 
            key={index} 
            isActive={activeSection === index}
            onClick={() => scrollTo(section, index)}
          />
        ))}
        </div>
         {/* <Footer/> */}
    </div>
  )
}

export default Manufacturing