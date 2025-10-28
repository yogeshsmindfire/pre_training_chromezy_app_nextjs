import './hero-module.css';

import { Sora } from 'next/font/google';
import { FaMagic } from 'react-icons/fa';

import content from "../../content/content";

const sora = Sora({ subsets: ['latin'] });

const HeroModule = () => {
  const { heroModule } = content;
  return (
    <section
      className='hero-module'
      style={{ fontFamily: sora.style.fontFamily }}
    >
      <div className='intro'>
        <FaMagic />
        <span>{heroModule.intro}</span>
      </div>
      <div className='tag-line'>
        <span>
          from <span style={{ color: '#11DEFF' }}>CONCEPT</span> to{' '}
          <span style={{ color: '#4380FF' }}>REALITY</span>
        </span>
      </div>
      <div className='info'>
        <span>{heroModule.info}</span>
      </div>
      <div className='description'>
        <span>
          {heroModule.description}
        </span>
      </div>
      <div className='stats'>
        <div>
          <span>{heroModule.stats.revenue.value}</span>
          <span>{heroModule.stats.revenue.label}</span>
        </div>
        <div>
          <span>{heroModule.stats.speed.value}</span>
          <span>{heroModule.stats.speed.label}</span>
        </div>
        <div>
          <span>{heroModule.stats.orders.value}</span>
          <span>{heroModule.stats.orders.label}</span>
        </div>
        <div>
          <span>{heroModule.stats.users.value}</span>
          <span>{heroModule.stats.users.label}</span>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default HeroModule;
