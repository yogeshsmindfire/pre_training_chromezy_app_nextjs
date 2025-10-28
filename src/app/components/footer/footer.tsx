import React from "react";
import styles from "./footer.module.css"; // We'll create this CSS file next
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

import appLogo from "../../../../public/app-logo.svg";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={`${styles.footerSection} ${styles.companyInfo}`}>
          <div className={styles.companyInfo}>
            <div className={styles.companyLogo}>
              <span className={styles.logoText}>
                <Image src={appLogo} alt="logo" />
              </span>
            </div>
            <p className={styles.companyDescription}>
              Not just about software & Product development; We&apos;re your
              tech partners, crafting modern digital solutions for next-gen
              excellence!
            </p>
            <div className={styles.companyLinks}>
              <a href="/terms" className={styles.footerLink}>
                Terms
              </a>
              <span className={styles.linkSeparator}>|</span>
              <a href="/privacy" className={styles.footerLink}>
                Privacy
              </a>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <a href="tel:+13153080901" className={styles.footerLink}>
                  +1 315 308 0901
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <a
                  href="mailto:sales@chromezy.com"
                  className={styles.footerLink}
                >
                  sales@chromezy.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.footerSection} ${styles.navigationLinks}`}>
          <div className={styles.navColumn}>
            <a href="/home" className={styles.footerNavItem}>
              Home
            </a>
            <a href="/about-us" className={styles.footerNavItem}>
              About Us
            </a>
            <a href="/career" className={styles.footerNavItem}>
              Career
            </a>
            <a href="/case-study" className={styles.footerNavItem}>
              Case Study
            </a>
            <div className={`${styles.footerSection} ${styles.callToAction}`}>
              <a href="/join-the-team" className={styles.footerCtaItem}>
                Join the Team
              </a>
            </div>
          </div>
          <div className={styles.navColumn}>
            <a href="/ai" className={styles.footerNavItem}>
              AI
            </a>
            <a href="/mvp" className={styles.footerNavItem}>
              MVP
            </a>
            <a href="/saas" className={styles.footerNavItem}>
              SaaS
            </a>
            <a href="/e-commerce" className={styles.footerNavItem}>
              E-commerce
            </a>
            <div className={`${styles.footerSection} ${styles.callToAction}`}>
              <a
                href="/work-with-us"
                className={`${styles.footerCtaItem} ${styles.highlight}`}
              >
                Work with us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          <span>Copyright © 2024</span>
          <span className={styles.separator}>|</span>
          <span>Donk Designs. All Rights Reserved</span>
          <span className={styles.separator}>|</span>
          <a
            href="https://debashisnaik.in"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.designedBy}
          >
            Designed by Debashish Naik
          </a>
        </div>
        <div className={styles.socialMedia}>
          <span>Connect with us:</span>
          <div className={styles.socialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
