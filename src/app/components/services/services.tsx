import './services.css';

import Image from 'next/image';

import content from '../../content/content';

import mvpVector from '../../../../public/services/mvp-vector.svg';
import saasVector from '../../../../public/services/saas-vector.svg';
import aiVector from '../../../../public/services/ai-vector.svg';
import b2bVector from '../../../../public/services/b2b-vector.svg';

const Services = () => {
  const { services } = content;

  return (
    <section className='services-container'>
      <div className='services-header'>
        <h1>{services.title}</h1>
        <p>{services.description}</p>
      </div>
      <div className='services-content'>
        <div className='mvp-services-card'>
          <Image src={mvpVector} alt='' width={100} height={125} />
          <span>{services.serviceCardsTitle}</span>
          <h3>{services.serviceCards.mvp.title}</h3>
          <p>{services.serviceCards.mvp.description}</p>
          <button>{services.serviceCardsActionCtaLabel}</button>
        </div>
        <div className='saas-services-card'>
          <Image src={saasVector} alt='' width={100} height={125} />
          <span>{services.serviceCardsTitle}</span>
          <h3>{services.serviceCards.saas.title}</h3>
          <p>{services.serviceCards.saas.description}</p>
          <button>{services.serviceCardsActionCtaLabel}</button>
        </div>
        <div className='ai-services-card'>
          <Image src={aiVector} alt='' width={100} height={125} />
          <span>{services.serviceCardsTitle}</span>
          <h2>{services.serviceCards.ai.title}</h2>
          <p>{services.serviceCards.ai.description}</p>
          <button>{services.serviceCardsActionCtaLabel}</button>
        </div>
        <div className='b2b-services-card'>
          <Image src={b2bVector} alt='' width={100} height={125} />
          <span>{services.serviceCardsTitle}</span>
          <h2>{services.serviceCards.b2b.title}</h2>
          <p>{services.serviceCards.b2b.description}</p>
          <button>{services.serviceCardsActionCtaLabel}</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
