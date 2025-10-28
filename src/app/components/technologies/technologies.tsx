// components/TechnologiesSection.js

"use client"; // For Next.js App Router

import styles from './technologies.module.css';

import technologiesGraphic from "../../../../public/technologies-graphic.png";
import Image from 'next/image';

// Data for the technologies list
const techData = [
  {
    id: '01',
    title: 'Web App Development',
    tags: ['React', 'Node', 'Angular', 'Vue', 'Express.JS', 'AdobeXD', 'Figma', 'Whimsical'],
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
    tags: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'Google Cloud', 'Ola Krutrim'],
  },
];

const TechnologiesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Column (Info Card) */}
        <div className={styles.leftColumn}>
          <h1>INNOVATIVE TECHNOLOGIES KEEPING US AHEAD</h1>
          <p>
            Discover the impact of bespoke digital solutions tailored precisely
            to your business&apos;s distinct requirements.
          </p>
          <div className={styles.imagePlaceholder}>
            {/* You would place your <Image> component here */}
            <span><Image src={technologiesGraphic} alt="Technologies Graphic" height={300} width={300} /></span>
          </div>
        </div>

        {/* Right Column (Tech List) */}
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
                        {/* In a real app, you might have a function 
                          to show an icon based on the tag name.
                        */}
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