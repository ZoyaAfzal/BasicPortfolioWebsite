'use client';
import React from 'react';
import { headerItems, userInfo } from '@/constants/constant';
import Image from 'next/image';
import{ Link as ScrollLink } from 'react-scroll';


const Intro = () => {
  return (
    <section 
     id={headerItems.home.page}
     className='h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start'
     >
        <div>
            <Image
            src={userInfo.img}
            alt="dp"
            width={300}
            height={300}
            className='rounded-full shadow-yellow-500 mt-10'
            />

        </div>
        <div className='md:ml-20 sm:ml-12 md:w-1/2'>
          <h1 className='text-7xl uppercase hidden md:block'>Front-end Developer</h1>
          <h1 className='text-2xl mt-5 md:text-3xl'>
            Hi , I&#39;m <span className='text-yellow-600 text-3xl md:text-4xl'>{userInfo.name}</span>
          </h1>
          <p className='mt-4 mb-4'
          dangerouslySetInnerHTML={{__html: userInfo.heading}}
          />
          <ScrollLink
          to={headerItems.about.page}
          className='bg-yellow-600 px-2 py-1 text-sm flex-row-reverse mx-2 justify-center rounded text-neutral-200 cursor-pointer'
          spy={true}
          smooth={true}
          >About</ScrollLink> 
          <ScrollLink
          to={headerItems.contact.page}
          className='bg-yellow-600 px-2 py-1 text-sm flex-row-reverse items-center justify-center rounded text-neutral-200 cursor-pointer'
          spy={true}
          smooth={true}
          >Contact</ScrollLink> 



        </div>
    </section>
  )
}

export default Intro