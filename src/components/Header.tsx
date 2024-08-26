"use client";
import React from 'react';
import { useState, useEffect} from 'react';
import { userInfo, headerItems } from "../constants/constant";
import { NavItems } from '@/model/header';
import { MdOutlineMenuOpen } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
;


const Header = () => {
  const [navitem, showNavitems] = useState<boolean>(false); 
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; 


  
    return (
    <header className='bg-white p-6 justify-between fixed top-0 md:flex w-full z-10'>
        <div className='flex justify-between'>
            <h2 className='text-2xl font-bold'>{ userInfo.name }</h2>
            < MdOutlineMenuOpen
             size={30}
             className='md:hidden'
             onClick={() => showNavitems(prevState => !prevState)}
             />
        </div>
        <div className={`mr-8 md:space-x-6 mt-3 md:mt-0 md:block ${navitem ? 'block' : 'hidden'}`}>
          {    
               Object.keys(headerItems).map(item => (
                <ScrollLink
                to={headerItems[item as keyof NavItems].page}
                 key={headerItems[item as keyof NavItems].label}
                 className='block md:inline-block cursor-pointer'
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
