import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import styles from './CustomerInsights.module.css';

import insightsImage1 from '../../../../public/customer-insights/insghts-1.png';
import insightsImage2 from '../../../../public/customer-insights/insghts-2.png';
import insightsImage3 from '../../../../public/customer-insights/insghts-3.png';

const insightsData = [
  {
    id: 1,
    image: insightsImage1,
    title: 'Successful MVP Launches That Changed the Game.',
    description:
      'Discover the secrets behind game-changing MVP launches! From lean startups to industry giants, explore how these innovative launches disrupted markets and paved the way for success. Click to uncover the strategies that revolutionized product development.',
    link: '#',
  },
  {
    id: 2,
    image: insightsImage2,
    title: 'How Our AI Product Development Company is Pioneering Innovation?',
    description:
      'Discover how our product development company pioneers innovation. From groundbreaking technologies to creative strategies, we’re shaping the future. Click to explore our journey and join us in revolutionizing industries.',
    link: '#',
  },
  {
    id: 3,
    image: insightsImage3,
    title:
      'Optimizing E-commerce Sales With AI-Driven Product Recommendations.',
    description:
      'Boost your e-commerce sales with AI-powered product recommendations. Learn how smart algorithms can enhance customer experience and drive conversions. Read our blog for actionable insights!',
    link: '#',
  },
];

const CustomerInsights = () => {
  return (
    <section className={styles.section}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <h1>FEATURED INSIGHTS</h1>
          <p>
            Were you looking to explore a specific topic? You&apos;re in the
            right spot.
          </p>
        </div>

        <div className={styles.insightsGrid}>
          {insightsData.map((insight) => (
            <a
              href={insight.link}
              key={insight.id}
              className={styles.insightCard}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </div>
              <div className={styles.cardContent}>
                <h2>{insight.title}</h2>
                <p>{insight.description}</p>
                <div className={styles.arrowIcon}>
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerInsights;
