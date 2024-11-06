"use client";
import React from 'react';
import { useState, useEffect} from 'react';
import { userInfo, headerItems } from "../constants/constant";
import { NavItems } from '@/model/header';
import { MdOutlineMenuOpen } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";


const Header = () => {
  const [navitem, showNavitems] = useState<boolean>(false); 
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; 


  
    return (
    <header className='header'>
        <div className='header-section'>
            <h2 className='menu'>{ userInfo.name }</h2>
            < MdOutlineMenuOpen
             size={30}
             className='menu-icon'
             onClick={() => showNavitems(prevState => !prevState)}
             />
        </div>
        <div className= {`{ ${navitem ? 'custom-block' : 'custom-hidden'} headeritems`} id="nav-item">
          {    
               Object.keys(headerItems).map(item => (
                <ScrollLink
                to={headerItems[item as keyof NavItems].page}
                 key={headerItems[item as keyof NavItems].label}
                 spy={true}
                 smooth={true}
               >{headerItems[item as keyof NavItems].label}</ScrollLink>
               ))
        
            }    
        </div>
    </header>
  )
}

export default Header;
