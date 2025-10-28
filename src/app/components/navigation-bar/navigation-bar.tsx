import Image from "next/image";
import { FaSearch } from "react-icons/fa";

import "./navigation-bar.css";

import appLogo from "../../../../public/app-logo.svg";

const NavigationBar = ({ scrollPosition }: {scrollPosition: number}) => {
  return (
    <div className="navbar">
      <div className="nav-segment-left">
        <div className="logo"><Image src={appLogo} alt="logo" /></div>
        <div className="search-bar">
          <FaSearch />
          <input id="search" type="text" placeholder="Search" />
        </div>
      </div>
      <div className="links">
        <div className={scrollPosition < 600 ? "active" : ""}>Home</div>
        <div className={scrollPosition > 600  && scrollPosition < 1370 ? "active" : ""}>Explore AI</div>
        <div className={scrollPosition > 1370 && scrollPosition < 1900 ? "active" : ""}>Services</div>
        <div className={scrollPosition > 1900 && scrollPosition < 2860 ? "active" : ""}>E-Commerce</div>
        <div className={scrollPosition > 2860 && scrollPosition < 3900 ? "active" : ""}>Products</div>
        <div className={scrollPosition > 3900 ? "active" : ""}>Blogs</div>
      </div>
      <div className="action-menu-items">
        <a href="#">About Us</a>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default NavigationBar;
