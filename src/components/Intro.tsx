'use client';
import React from 'react';
import { headerItems, userInfo } from '@/constants/constant';
import Image from 'next/image';
import{ Link as ScrollLink } from 'react-scroll';



const Intro = () => {
  return (
    <section 
     id={headerItems.home.page}
     className='h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start mt-10'
     >
        <div>
            <Image
            src={userInfo.img}
            alt="dp"
            width={300}
            height={300}
            className='rounded-full shadow-2xl mt-10'
            />

        </div>
        <div className='md:ml-20 sm:ml-12 md:w-1/2'>
          <h3 className='text-7xl uppercase hidden md:block mt-10'>Front-end Developer</h3>
          <h2 className='text-2xl mt-5 md:text-3xl'>
            Hi , I&#39;m <span className='text-red-600 text-3xl md:text-4xl'>{userInfo.name}</span>
          </h2>
          <p 
          className='mt-4 mb-4'
          dangerouslySetInnerHTML={{__html: userInfo.heading}}
          />
          <div className="flex space-x-4 justify-center md:justify-start">
          <ScrollLink
          to={headerItems.about.page}
          className='bg-teal-600 rounded text-neutral-100 flex w-28 h-10 m-auto items-center justify-center md:m-0 hover:bg-teal-400'
          spy={true}
          smooth={true}
          >About</ScrollLink> 
          <ScrollLink
          to={headerItems.contact.page}
          className='ml-8 bg-teal-600 relative rounded text-neutral-100 flex w-28 h-10 m-auto items-center justify-center md:m-0 hover:bg-teal-400'
          spy={true}
          smooth={true}
          >Contact</ScrollLink> 
          </div>



        </div>
    </section>
  )
}

export default Intro