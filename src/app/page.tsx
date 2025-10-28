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
import ContactForm from './components/ContactForm/ContactForm';
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

  return (
    <div className='main'>
      <NavigationBar scrollPosition={scrollPosition} />
      <div className='background-container'>
        <Image
          src={Triangle}
          alt='triangle'
          id='triangle'
          style={{
            transform: `translateY(${scrollPosition * -0.05}px)`,
          }}
        />
        <Image
          src={Ball}
          alt='ball'
          id='ball'
          style={{
            transform: `translate(${scrollPosition * -0.05}px, ${
              scrollPosition * 0.05
            }px)`,
          }}
        />
      </div>
      <div className='content-container'>
        <HeroModule />
        <Clients />
        <Services />
        <ClientFeedback />
        <SuccessStories />
        <TechnologiesSection />
        <CustomerInsights />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
