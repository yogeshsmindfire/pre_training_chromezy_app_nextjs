import './services.css';

import Image from 'next/image';

import mvpVector from '../../../../public/services/mvp-vector.svg';
import saasVector from '../../../../public/services/saas-vector.svg';
import aiVector from '../../../../public/services/ai-vector.svg';
import b2bVector from '../../../../public/services/b2b-vector.svg';

const Services = () => {
  return (
    <section className='services-container'>
      <div className='services-header'>
        <h1>Product Engineering</h1>
        <p>
          Discover the impact of bespoke digital solutions tailored precisely to
          your business&apos;s distinct requirements. Our experienced team of
          professionals ensures you receives outstanding results that
          consistently exceeds your expectations.
        </p>
      </div>
      <div className='services-content'>
        <div className='mvp-services-card'>
          <Image src={mvpVector} alt='' width={100} height={125} />
          <span>Our Services</span>
          <h3>MVP</h3>
          <p>
            We Specialize in custom MVP developing, focused on tailored
            prototyping services to meet diverse client needs and ensure rapid
            market launch.{' '}
          </p>
          <button>Talk to a Product Expert</button>
        </div>
        <div className='saas-services-card'>
          <Image src={saasVector} alt='' width={100} height={125} />
          <span>Our Services</span>
          <h3>SaaS</h3>
          <p>
            Take your business to new heights with our all-inclusive SaaS
            development services, delivering seamless and digital experiences
            that are platform-agnostic and tailored to customer needs.
          </p>
          <button>Talk to a Product Expert</button>
        </div>
        <div className='ai-services-card'>
          <Image src={aiVector} alt='' width={100} height={125} />
          <span>Our Services</span>
          <h2>AI</h2>
          <p>
            We develop tailored AI solutions, leveraging machine learning, NLP &
            computer vision to automate, optimize and enahance decision-making
            process.
          </p>
          <button>Talk to a Product Expert</button>
        </div>
        <div className='b2b-services-card'>
          <Image src={b2bVector} alt='' width={100} height={125} />
          <span>Our Services</span>
          <h2>B2B & B2C Commerce Transformation</h2>
          <p>
            We elevate B2B and B2C commerce, specializing in Shopify,
            Prestashop, Magneto and Woocommerce to boost online orders and
            enhance customer shopping experiences, keeping you competetive.
          </p>
          <button>Talk to a Product Expert</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
