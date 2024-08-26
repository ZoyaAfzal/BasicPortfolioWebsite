'use client';
import React from 'react';
import { headerItems, userInfo } from '@/constants/constant';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import dynamic from 'next/dynamic';


const About = () => {
  return (
    <section id={headerItems.about.page}
     className='h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start'>
          <div className='m-4 md:ml-20 sm:ml-12 md:w-1/2'>
          <h1 className='text-6xl my-6'>About</h1>
          <h2 className='text-3xl my-4'>
            Get to know me!
          </h2>
          <p className='[&>p]:mt-5'
          dangerouslySetInnerHTML={{__html: userInfo.about}}>
          </p> 
          <ScrollLink
          to={headerItems.contact.page}
          className='bg-yellow-600 w-20 h-10 mt-2 flex items-center justify-center rounded text-neutral-200 cursor-pointer'
          spy={true}
          smooth={true}
          
          >Contact</ScrollLink>
          </div>

          <div className='flex flex-col justify-center items-center text-center'>
            <Image
            src={userInfo.img}
            alt="dp"
            width={300}
            height={300}
            className='m-auto'
            />
        <div className='mt-3 w-3/4 break-words'>
            {
                userInfo.skills.map((skill) => ( 
                < span 
                key= {skill}
                className='bg-gray-300 m-1 p-2 text-sm inline-block rounded-md' >{skill}</span>
                ))
            }
        </div>
        </div>
    </section>
  )
}


export default dynamic (() => Promise.resolve(About), {ssr: false})