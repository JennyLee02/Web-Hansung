import React, { useState, useEffect } from 'react';
import "./kanane.css"; 
import buildingView from '../../../images/Kanane/main_img.jpg';
import splitStringUsingRegex from '../../../utils/splitStringUsingRegex';
import {motion, variants} from "framer-motion";

const charVariants= {
  hidden: {opacity: 0},
  reveal: {opacity: 1}
};
const title = "KANANE";
const kanane_intro= "현대적 모듈러 설계를 기반으로 한 새로운 주거 패러다임";  

export const Kanane = () => {
  const titleChars = splitStringUsingRegex(title);
  const introChars = splitStringUsingRegex(kanane_intro);

  // State to control the visibility of the intro text
  const [showIntro, setShowIntro] = useState(false);

  // After the title has been animated, set showIntro to true
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(true);
    }, titleChars.length * 300); // Assuming each child animation is 300ms
    return () => clearTimeout(timer);
  }, [titleChars.length]);

  return (
    <div>
      <div className='main-display'>
        <img className='main-img' src={buildingView} alt='전체조감도 이미지'/>
        <motion.h2 
        className='kanane-title'
          initial="hidden"
          whileInView="reveal"
          transition={{staggerChildren: 0.3}}
        >
          {titleChars.map((char) =>(
            <motion.span key={char} transition = {{duration: 1}} variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h2>
        {showIntro && (
          <motion.p
            className='kanane-intro'
            initial="hidden"
            whileInView="reveal"
            transition={{staggerChildren: 0.05}}
          >
            {introChars.map((char) =>(
                <motion.span key={char} transition = {{duration: 0.35}} variants={charVariants}>
                  {char}
                </motion.span>
            ))}
          </motion.p>
        )}
      </div>
    </div>
  )
}
