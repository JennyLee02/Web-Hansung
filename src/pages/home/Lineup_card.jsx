import {useState, React} from 'react';
import {motion} from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './lineup.css';




export const LineupCard = ({ id, defaultImage, expandedImage, title, description, isOpen, toggleOpen, hideTitle}) => {
    const {t, i18n} = useTranslation();
    return (
        <motion.div 
            layout
            className={`card ${isOpen ? 'card-expanded' : 'card-collapsed'}`}
            transition={{ duration: 1, type: "spring", damping: 14 }}
            onClick={() => toggleOpen(id)}
            initial={false}
        >
            <motion.img src={isOpen ? expandedImage : defaultImage} alt={title} className={isOpen ? 'card-expanded' : 'card-collapsed'}/>
            <motion.div className='card-content'>
                <motion.h1 layout='position' className={hideTitle ? 'hidden-title' : ''}>{title}</motion.h1>
                {isOpen && (
                    <motion.div className='text-box'>
                        <motion.p
                            layout='position'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            {description}
                        </motion.p>
                    </motion.div>
                    
                )}
            </motion.div>
        </motion.div>
    );
}
        