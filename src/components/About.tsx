'use client';
import React from 'react';
import { headerItems, userInfo } from '@/constants/constant';
import Image from 'next/image';
import dynamic from 'next/dynamic';


const About = () => {
  return (
    <section id={headerItems.about.page}
     className="h-screen flex flex-col text-center justify-center items-center pl-6 mt-8 pr-8 md:flex-row md:text-start">
          <div className="m-4 md:ml-20 sm:ml-12 md:w-1/2">
          <h2 className="text-6xl my-6 mt-10 mb-0">About</h2>
          <h3 className="text-3xl my-4 font-semibold text-teal-600">
            Get to know me!
          </h3>
          <p 
          className={"[&>p]:mt-3 mr-2"} 
          dangerouslySetInnerHTML={{__html: userInfo.about}}>
          </p> 
          </div>

          <div className="flex flex-col justify-center items-center text-center mt-10">
            <Image
            src={userInfo.img}
            alt="dp"
            width={300}
            height={300}
            className="[&>p]:mt-3"
            />
        <div className="break-words w-3/4 mt-3">
            {
                userInfo.skills.map((skill) => ( 
                < span 
                key= {skill}
                className='bg-gray-200 m-1 p-2 rounded-md inline-block text-sm' >{skill}</span>
                ))
            }
        </div>
        </div>
    </section>
  )
}


export default dynamic (() => Promise.resolve(About), {ssr: false})