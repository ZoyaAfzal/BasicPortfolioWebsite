'use client';
import React from 'react';
import { headerItems, userInfo } from '@/constants/constant';
import Image from 'next/image';
import dynamic from 'next/dynamic';


const About = () => {
  return (
    <section id={headerItems.about.page}
     className='about-section'>
          <div className='abt'>
          <h2 className='about'>About</h2>
          <h3 className='about-heading'>
            Get to know me!
          </h3>
          <p 
          dangerouslySetInnerHTML={{__html: userInfo.about}}>
          </p> 
          </div>

          <div className='about-image'>
            <Image
            src={userInfo.img}
            alt="dp"
            width={300}
            height={300}
            className='abt-img'
            />
        <div className='skill-section'>
            {
                userInfo.skills.map((skill) => ( 
                < span 
                key= {skill}
                className='skills' >{skill}</span>
                ))
            }
        </div>
        </div>
    </section>
  )
}


export default dynamic (() => Promise.resolve(About), {ssr: false})