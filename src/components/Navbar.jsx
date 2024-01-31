import {Link, NavLink} from 'react-router-dom';
import {links} from '../data'
import { products } from '../data';
import './navbar.css';
import '../index.css';
import Logo from '../images/logo.svg';

import { IoCloseOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
import {FaGlobe} from 'react-icons/fa';

import { useState } from 'react';
import {useTranslation} from 'react-i18next';
import i18n from 'i18next';


const Navbar = () => {
    const[isNavShowing, setIsNavShowing] = useState(false);

    // handle nav link click in small devices
    const handleNavLinkClick =() => {
        setIsNavShowing(false);
    }

    // handle multi language button click
    const handleLanguageClick = (lang) => {
        i18n.changeLanguage(lang);
    }

  return (
    <nav>
        <div className="nav__container">
            <Link to="/" className='logo'>
                <img src={Logo} alt="Hansung Logo" onClick={handleNavLinkClick}/>
            </Link>
            <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map(({name, path}, index)=>{
                        return(
                            <li key={index}>
                                <NavLink to={path} 
                                        className={({isActive}) => isActive ? 'active-nav' : ''}
                                        // When clicking, change the state
                                        onClick={handleNavLinkClick}>
                                    {name}
                                </NavLink>

                                {name === "PRODUCTS" && (
                                    <ul className="dropdown-content">
                                        {products.map((product, idx) => (
                                        <li key={idx}>
                                            <Link to={product.path} onClick={handleNavLinkClick}>
                                                {product.name}
                                            </Link>
                                        </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            
                        )
                    })

                    
                }
                

                {/* localization Button */}
                <li className='locale-btn'> 
                    <div>
                        <button onClick={()=>handleLanguageClick('en')}>
                            EN
                        </button>
                        <span> | </span>
                        <button onClick={()=>handleLanguageClick('ko')}>
                             KR 
                        </button>
                        <FaGlobe className='icon__globe'/>
                    </div>
                </li>
            </ul>


            {/* nav toggle button for mobile version */}
            <button className="nav__toggle-btn" onClick={()=> setIsNavShowing(!isNavShowing)}>
                {
                    isNavShowing ? <IoCloseOutline /> : <HiBars3 />
                
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar