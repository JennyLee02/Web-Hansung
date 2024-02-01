import React from 'react';
import { PiPlant } from "react-icons/pi";
import { PiFactory } from "react-icons/pi";
import { TiWeatherDownpour } from "react-icons/ti";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { useTranslation } from 'react-i18next';
import "./manufacturing_cards.css";

const iconMapping = {
    PiPlant: <PiPlant/>,
    PiFactory: <PiFactory/>,
    TiWeatherDownpour: <TiWeatherDownpour/>,
    HiOutlineWrenchScrewdriver: <HiOutlineWrenchScrewdriver/>

}

export const M_card = ({id, image, alt, icon, title, description}) => {
    const t = useTranslation();
    const iconElement = isNaN(icon) ? iconMapping[icon] || icon : <span className="text-icon">{icon}</span>;
  return (
    <div className='Mcard'>
        <img src={image} alt={alt} className='Mcard-img'/>
        <div className='Mcard-default'>
            <div className='Mcard-icon'>{iconElement}</div>
            <div className='Mcard-title'>{title}</div>
        </div>
        <div className='Mcard-description'>{description}</div>
    </div>
  )
}
