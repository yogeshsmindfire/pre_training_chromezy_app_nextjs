import Image from 'next/image';
import './client-feedback.css';

import KiriLogo from '../../../../public/client-feedback/kiri-logo.svg';
import Quote from '../../../../public/client-feedback/quote.svg';

const ClientFeedback = () => {
  return (
    <section className='client-feedback'>
      <h1 className='feedback-header'>Our Happy Clients</h1>
      <p className='description'>
        Dummy Ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <div className='feedback-cards'>
        <div className='feedback-card'>
          <Image src={Quote} alt='quote' />
          <p className='description'>
            Highly responsive with keen attension to detail. Assisted in
            building my e-commerce platform, mapping transformative areas,
            resulting in exception customer experience.
          </p>
          <div className='client-user-info'>
            <p className='client-user-name'>BRANDON LAU</p>
            <p className='client-user-title'>(CEO) Kiri Journey</p>
            <hr />
          </div>
          <div className='client-firm-details'>
            <div className='project-details'>
              <span>Star Rating - 5/5</span>
              <span>Project - E-commerce Development</span>
              <span>Country - HongKong</span>
            </div>
            <div className='client-logo'>
              <Image
                src={KiriLogo}
                alt='client-logo'
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className='feedback-card'>
          <Image src={Quote} alt='quote' />
          <p className='description'>
            They are swift to respond and implement faster. Thanks to Chromezy
            for providing expert developers and on-time deliver to help scale
            our cloud-based ERP SaaS that helps us automate workflow, and get an
            analytics dashboard for swift decision making.
          </p>
          <div className='client-user-info'>
            <p className='client-user-name'>MAC DOLLON</p>
            <p className='client-user-title'>(CTO) MasterStudy</p>
            <hr />
          </div>
          <div className='client-firm-details'>
            <div className='project-details'>
              <span>Star Rating - 5/5</span>
              <span>Project - SaaS based cloud ERP</span>
              <span>Country - United States</span>
            </div>
            <div className='client-logo'>
              <Image
                src={KiriLogo}
                alt='client-logo'
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className='feedback-card'>
          <Image src={Quote} alt='quote' />
          <p className='description'>
            Highly responsive with keen attension to detail. Assisted in
            building my e-commerce platform, mapping transformative areas,
            resulting in exception customer experience.
          </p>
          <div className='client-user-info'>
            <p className='client-user-name'>BRANDON LAU</p>
            <p className='client-user-title'>(CEO) Kiri Journey</p>
            <hr />
          </div>
          <div className='client-firm-details'>
            <div className='project-details'>
              <span>Star Rating - 5/5</span>
              <span>Project - E-commerce Development</span>
              <span>Country - HongKong</span>
            </div>
            <div className='client-logo'>
              <Image
                src={KiriLogo}
                alt='client-logo'
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
