'use client';

import styles from './Technologies.module.css';

import technologiesGraphic from '../../../../public/technologies-graphic.png';
import Image from 'next/image';

const techData = [
  {
    id: '01',
    title: 'Web App Development',
    tags: [
      'React',
      'Node',
      'Angular',
      'Vue',
      'Express.JS',
      'AdobeXD',
      'Figma',
      'Whimsical',
    ],
  },
  {
    id: '02',
    title: 'Mobile App Development',
    tags: ['Flutter', 'Kotin', 'Swift', 'React Native', 'AdobeXD', 'Figma'],
  },
  {
    id: '03',
    title: 'E-commerce',
    tags: ['Shopify', 'WooCommerce', 'Prestashop'],
  },
  {
    id: '04',
    title: 'Analytics',
    tags: ['Python', 'PowerBI', 'Tableau', 'Amazon QuickSight', 'Apache Spark'],
  },
  {
    id: '05',
    title: 'Data & Cloud',
    tags: [
      'Azure',
      'AWS',
      'Docker',
      'Kubernetes',
      'Google Cloud',
      'Ola Krutrim',
    ],
  },
];

const TechnologiesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h1>INNOVATIVE TECHNOLOGIES KEEPING US AHEAD</h1>
          <p>
            Discover the impact of bespoke digital solutions tailored precisely
            to your business&apos;s distinct requirements.
          </p>
          <div className={styles.imagePlaceholder}>
            <span>
              <Image
                src={technologiesGraphic}
                alt='Technologies Graphic'
                height={300}
                width={300}
              />
            </span>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.techList}>
            {techData.map((category) => (
              <div key={category.id} className={styles.techCategory}>
                <span className={styles.categoryNumber}>{category.id}</span>
                <div className={styles.categoryContent}>
                  <h3>{category.title}</h3>
                  <div className={styles.tagsContainer}>
                    {category.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
