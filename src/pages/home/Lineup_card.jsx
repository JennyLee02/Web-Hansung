import {useState, React} from 'react';
import {motion} from 'framer-motion';
import cardData from '../../data/lineupCardData.json';
import './lineup.css';


export const LineupCard = ({defaultImage, altClosed, expandedImage, altOpen, title, description}) => {

    const [isOpen, setIsOpen] =useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <motion.div 
            layout
            className='card'
            transition={{duration: 1, type:"spring", damping: 14}}
            onClick={toggleOpen}
        >

            {!isOpen && (
            <>
                <motion.img src={defaultImage} alt={altClosed} className='default-img'/>
                <motion.h1 layout='position'>MODULAR</motion.h1>
            </>
            )}
            
            {isOpen && (
                <>
                    <motion.img  
                        className='expand-img' 
                        src={expandedImage} 
                        alt={altOpen}/>
                    <motion.div className='content-row'>
                        <motion.h1 layout='position'>{title}</motion.h1>
                        <motion.p 
                            layout='position'
                            initial={{ opacity: 0 }}  
                            animate={{ opacity: 1 }}  
                            exit={{opacity: 0}}
                            transition={{ duration: 1, ease: "easeInOut"}}>
                            {description}
                        </motion.p>
                    </motion.div>
                </>
            )}
        </motion.div>

    )
  } 

        