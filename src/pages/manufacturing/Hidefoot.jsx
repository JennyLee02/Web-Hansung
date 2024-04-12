import React from 'react';
import { useTranslation } from 'react-i18next';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import hidefoot1 from '../../images/Manufacturing/hidefoot1.jpg';
import hidefoot3 from '../../images/Manufacturing/hidefoot3.jpg';

import './hidefoot.css';


const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    },
};

const descriptionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: 0.2 } // Delayed to start after title
    },
};

export const Hidefoot = () => {
    const {t, i18n} = useTranslation();

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });


  return (
    <div className='hidefoot-container'>
        <div className="hidefoot-top">
            <img src={hidefoot1} alt='hidefoot image1' className='hidefoot-image1'/>
            <div className="hidefoot-text">
                <motion.h1 
                    className='hidefoot-title'
                    ref={ref}
                    variants={titleVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    HIDE FOOT
                </motion.h1>
                <motion.p 
                    className='hidefoot-description'
                    ref={ref}
                    variants={descriptionVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {t('Manufacturing.hidefoot.description')}
                </motion.p>
            </div>
        </div>
        <div className="hidefoot-bottom">
            <img className='hidefoot-image2' src={hidefoot3} alt='hidefoot image3'/>
        </div>

    </div>
  )
}
