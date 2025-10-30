'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import HeroModule from '@/app/components/HeroModule/HeroModule';
import NavigationBar from '@/app/components/NavigationBar/Navigationbar';

import Ball from '../../public/ball.png';
import Triangle from '../../public/triangle-transparent.png';

import './app.css';
import Clients from './components/Clients/Clients';
import Services from './components/Services/Services';
import ClientFeedback from './components/ClientFeedback/ClientFeedback';
import Footer from './components/Footer/Footer';

import CustomerInsights from './components/CustomerInsights/CustomerInsights';
import TechnologiesSection from './components/Technologies/Technologies';
import SuccessStories from './components/SuccessStories/SuccessStories';

const Page = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const ballStyle = {
    transform: `translate(${scrollPosition < 1370 ? `${scrollPosition * -0.2}px, ${scrollPosition * 0.1}px` : `-800, 0`})`,
    zIndex: scrollPosition > 600 && scrollPosition < 1370 ? 99 : 9999,
    width: scrollPosition > 600 && scrollPosition < 1370 ? '400px' : '200px',
    height: scrollPosition > 600 && scrollPosition < 1370 ? '400px' : '200px',
  };

  return (
    <div className='main'>
      <NavigationBar scrollPosition={scrollPosition} />
      <div className='background-container'>
        <div className='background-filter'>
          <Image
            src={Triangle}
            alt='triangle'
            id='triangle'
            style={{
              transform: `translateY(${scrollPosition * -0.05}px)`,
            }}
          />
        </div>
        <Image src={Ball} alt='ball' id='ball' style={ballStyle} />
      </div>
      <div className='content-container'>
        <HeroModule />
        <Clients />
        <Services />
        <ClientFeedback />
        <SuccessStories />
        <TechnologiesSection />
        <CustomerInsights />

        <Footer />
      </div>
    </div>
  );
};

export default Page;
