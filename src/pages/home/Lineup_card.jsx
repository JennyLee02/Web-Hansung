import {useState, React} from 'react';
import {motion} from 'framer-motion';
import Modular from '../../images/modular.png';
import ModularExpand from '../../images/modular_expand.png';
import './lineup.css';


export const LineupCard = () => {
    const [isOpen, setIsOpen] =useState(false);

    const variants = {
        open: {width: 'auto'},
        closed: {width: 0}
    };
  return (
    <div className='card-container'>
        <motion.div 
            transition={{layout: {duration:1}}}
            onMouseEnter={() => setIsOpen(!isOpen)} 
            onMouseLeave={()=> setIsOpen(!isOpen)} 
            className='card'>
            <motion.img 
                className={`cover-img ${isOpen ? 'hidden' : ''}`} 
                src={Modular} 
                alt='모듈러 건축 이미지'/>
            <motion.h1 layout="position" className='title'>MODULAR</motion.h1>
            {isOpen && (
                <motion.div 
                    initial={{width: 0}} 
                    animate={{width: isOpen ? '100%' : 0}} 
                    transition={{duration: 1}}
                    className='expand'>
                    <motion.img  className='modular-open' src={ModularExpand} alt='모듈러 건출 이미지'/>
                    <p>dsdjltksdj</p>
                </motion.div>
            )}
        </motion.div>
    </div>
  )
}
