'use client';
import React from 'react';
import { headerItems, userInfo } from '@/constants/constant';
import Image from 'next/image';
import{ Link as ScrollLink } from 'react-scroll';



const Intro = () => {
  return (
    <section 
     id={headerItems.home.page}
     className='home-section'
     >
        <div>
            <Image
            src={userInfo.img}
            alt="dp"
            width={300}
            height={300}
            className='home-img'
            />

        </div>
        <div className='intro-section'>
          <h3 >Front-end Developer</h3>
          <h2 className='intro-heading'>
            Hi , I&#39;m <span className='user-info'>{userInfo.name}</span>
          </h2>
          <p 
          dangerouslySetInnerHTML={{__html: userInfo.heading}}
          />
          <ScrollLink
          to={headerItems.about.page}
          className='intro-btn'
          spy={true}
          smooth={true}
          >About</ScrollLink> 
          <ScrollLink
          to={headerItems.contact.page}
          className='introbtn'
          spy={true}
          smooth={true}
          >Contact</ScrollLink> 



        </div>
    </section>
  )
}

export default Intro