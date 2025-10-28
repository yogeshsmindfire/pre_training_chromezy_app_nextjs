import './hero-module.css';

import { Sora } from 'next/font/google';

import { FaMagic } from 'react-icons/fa';

const sora = Sora({ subsets: ['latin'] });

const HeroModule = () => {
  return (
    <section
      className='hero-module'
      style={{ fontFamily: sora.style.fontFamily }}
    >
      <div className='intro'>
        <FaMagic />
        <span>Introducing AI Automation</span>
      </div>
      <div className='tag-line'>
        <span>
          from <span style={{ color: '#11DEFF' }}>CONCEPT</span> to{' '}
          <span style={{ color: '#4380FF' }}>REALITY</span>
        </span>
      </div>
      <div className='info'>
        <span>We Engineer your software success to digital transformation</span>
      </div>
      <div className='description'>
        <span>
          At Chromezy, we translate your ideas into market-ready solutions
          quickly and precisely. Laveraging the power of technology and
          prioritizing user needs, we deliver products the are both cutting edge
          and user-centric.
        </span>
      </div>
      <div className='stats'>
        <div>
          <span>200%</span>
          <span>Revenue Growth</span>
        </div>
        <div>
          <span>4x</span>
          <span>Speed to Market</span>
        </div>
        <div>
          <span>73%</span>
          <span>New Order</span>
        </div>
        <div>
          <span>10K+</span>
          <span>Active Users</span>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default HeroModule;
