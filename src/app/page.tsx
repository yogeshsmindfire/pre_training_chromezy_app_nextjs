'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import HeroModule from '@/app/components/hero-module/hero-module';
import NavigationBar from '@/app/components/navigation-bar/navigation-bar';

import Ball from '../../public/ball.png';
import Triangle from '../../public/triangle-transparent.png';

import './app.css';
import Clients from './components/clients/clients';
import Services from './components/services/services';
import ClientFeedback from './components/client-feedback/client-feedback';
import Footer from './components/footer/footer';
import ContactForm from './components/contact-form/contact-form';
import CustomerInsights from './components/customer-insights/customer-insights';
import TechnologiesSection from './components/technologies/technologies';
import SuccessStories from './components/success-stories/success-stories';

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
