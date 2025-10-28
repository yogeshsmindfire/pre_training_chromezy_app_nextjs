import Image from 'next/image';
import './ClientFeedback.css';

import content from '../../content/content';

import KiriLogo from '../../../../public/clients/kiri.png';
import MasterStudyLogo from '../../../../public/clients/masterStudy.png';
import ApacheLogo from '../../../../public/clients/apache.svg';
import Quote from '../../../../public/client-feedback/quote.svg';

const ClientFeedback = () => {
  const { clientFeedback } = content;
  return (
    <section className='client-feedback'>
      <h1 className='feedback-header'>{clientFeedback.title}</h1>
      <p className='description'>{clientFeedback.description}</p>
      <div className='feedback-cards'>
        <div className='feedback-card'>
          <Image src={Quote} alt='quote' />
          <p className='description'>
            {clientFeedback.feedbackCards[0].description}
          </p>
          <div className='client-user-info'>
            <p className='client-user-name'>
              {clientFeedback.feedbackCards[0].clientName}
            </p>
            <p className='client-user-title'>
              {clientFeedback.feedbackCards[0].clientTitle}
            </p>
            <hr />
          </div>
          <div className='client-firm-details'>
            <div className='project-details'>
              <span>
                Star Rating - {clientFeedback.feedbackCards[0].rating}
              </span>
              <span>Project - {clientFeedback.feedbackCards[0].project}</span>
              <span>Country - {clientFeedback.feedbackCards[0].country}</span>
            </div>
            <div className='client-logo'>
              <Image src={KiriLogo} alt='client-logo' width={80} height={40} />
            </div>
          </div>
        </div>
        <div className='feedback-card'>
          <Image src={Quote} alt='quote' />
          <p className='description'>
            {clientFeedback.feedbackCards[1].description}
          </p>
          <div className='client-user-info'>
            <p className='client-user-name'>
              {clientFeedback.feedbackCards[1].clientName}
            </p>
            <p className='client-user-title'>
              {clientFeedback.feedbackCards[1].clientTitle}
            </p>
            <hr />
          </div>
          <div className='client-firm-details'>
            <div className='project-details'>
              <span>
                Star Rating - {clientFeedback.feedbackCards[1].rating}
              </span>
              <span>Project - {clientFeedback.feedbackCards[1].project}</span>
              <span>Country - {clientFeedback.feedbackCards[1].country}</span>
            </div>
            <div className='client-logo'>
              <Image
                src={MasterStudyLogo}
                alt='client-logo'
                width={80}
                height={25}
              />
            </div>
          </div>
        </div>
        <div className='feedback-card'>
          <Image src={Quote} alt='quote' />
          <p className='description'>
            {clientFeedback.feedbackCards[2].description}
          </p>
          <div className='client-user-info'>
            <p className='client-user-name'>
              {clientFeedback.feedbackCards[2].clientName}
            </p>
            <p className='client-user-title'>
              {clientFeedback.feedbackCards[2].clientTitle}
            </p>
            <hr />
          </div>
          <div className='client-firm-details'>
            <div className='project-details'>
              <span>
                Star Rating - {clientFeedback.feedbackCards[2].rating}
              </span>
              <span>Project - {clientFeedback.feedbackCards[2].project}</span>
              <span>Country - {clientFeedback.feedbackCards[2].country}</span>
            </div>
            <div className='client-logo apache'>
              <Image src={ApacheLogo} alt='apache-logo' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
