// components/SuccessStories.js

'use client'; // For Next.js App Router

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import './success-stories.css';

import successStories1 from '../../../../public/success-stories/success-stories1.png';
import successStories2 from '../../../../public/success-stories/success-stories2.png';
import successStories3 from '../../../../public/success-stories/success-stories3.png';
import successStories4 from '../../../../public/success-stories/success-stories4.png';
import successStories5 from '../../../../public/success-stories/success-stories5.png';

// Mock data for the success stories
const storiesData = [
  {
    id: 'finconnect',
    title: 'FinConnect',
    subtitle: 'Customer Relationship Management (CRM)',
    imageUrl: successStories1, // Placeholder image path
    gridClass: 'card1',
  },
  {
    id: 'healthsync',
    title: 'HealthSync',
    subtitle: 'Health Tracking App for Patients and Doctors',
    imageUrl: successStories2, // Placeholder image path
    gridClass: 'card2',
  },
  {
    id: 'commerce360',
    title: 'Commerce360',
    subtitle: 'Online Store, Multivendor Marketplace & E-commerce Apps',
    imageUrl: successStories3, // Placeholder image path
    gridClass: 'card3',
  },
  {
    id: 'printwithai',
    title: 'PrintWithAI',
    subtitle:
      'Web-to-Print Software | Online Design Tool | Product Designer Tool',
    imageUrl: successStories4, // Placeholder image path
    gridClass: 'card4',
  },
  {
    id: 'pminsights',
    title: 'PM Insights',
    subtitle: 'Project Management Tool (SaaS & Hosted)',
    imageUrl: successStories5, // Placeholder image path
    gridClass: 'card5',
  },
];

const SuccessStories = () => {
  return (
    <section className='success-stories'>
      <div className='container'>
        <div className='gridContainer'>
          {/* Text Block */}
          <div className='textBlock'>
            <h1>SUCCESS STORIES</h1>
            <p>
              Dummy ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>

          {/* Story Cards */}
          {storiesData.map((story) => (
            <div key={story.id} className={`storyCard ${story.gridClass}`}>
              <div className='imageContainer'>
                <Image
                  src={story.imageUrl}
                  alt={story.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
                <button className='arrowButton'>
                  <ArrowUpRight size={20} />
                </button>
              </div>
              <div className='cardContent'>
                <h3>{story.title}</h3>
                <p>{story.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
