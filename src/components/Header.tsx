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
    <header className="p-6 flex justify-between fixed top-0 z-10 font-semibold bg-white w-full md:flex">
        <div className="flex justify-between">
            <h2 className='text-2xl hover:text-teal-600 font-bold'>{ userInfo.name }</h2>
            < MdOutlineMenuOpen
             size={35}
             className="md:hidden" 
             onClick={() => showNavitems(prevState => !prevState)}
             />
        </div>
        <div className={`mr-8 md:space-x-6 md:block mt-3 md:mt-0 hover:text-teal-600 ${ navitem ? 'block' : 'hidden'}`}>
          {    
               Object.keys(headerItems).map(item => (
                <ScrollLink
                to={headerItems[item as keyof NavItems].page}
                 key={headerItems[item as keyof NavItems].label}
                className="block md:inline-block cursor-pointer"
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
