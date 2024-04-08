import React from 'react';
import './connector.css';
import { useTranslation } from 'react-i18next';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import connector1 from '../../images/Manufacturing/connector1.jpg';
import connector2 from '../../images/Manufacturing/connector2.jpg';
import hidefoot1 from '../../images/Manufacturing/hidefoot1.jpg';
import hidefoot2 from '../../images/Manufacturing/hidefoot2.jpg';


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Delay in seconds between each child's animation
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.8, 
        }
    },
};

const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8, 
            delay: 1, 
        }
    },
};


const Connector = () => {
    const {t, i18n} = useTranslation();

    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.5, // Adjust as needed
    });

  return (
    <motion.div 
        className='connector-container'
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
    >
        <div className='connector-top'>
            <img className='connector-image' src={connector1} alt='connector image1'/>
            <motion.div 
                className='connector-title'
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {/* Child elements with staggered animation */}
                <motion.h1 variants={childVariants}>MODULAR</motion.h1>
                <motion.h1 variants={childVariants}>JOINT</motion.h1>
                <motion.h1 variants={childVariants}>TECHNOLOGY</motion.h1>
            </motion.div>
        </div>
        
        <motion.div className='connector-bottom'>
            <img className='connector-image' src={connector2} alt='connector image2'/>
            <motion.p 
                className='connector-description' 
                variants={descriptionVariants}
            >
                {t('Manufacturing.connector.description')}
            </motion.p>
        </motion.div>
    </motion.div>
  )
}

export default Connector