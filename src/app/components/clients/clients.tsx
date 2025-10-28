// import Image from "next/image";
import './clients.css';

// import MasterStudyLogo from "../../../../public/master_study_logo.png";

const Clients = () => {
  return (
    <section className='clients'>
      <ul>
        <li>
          {/* <Image src={MasterStudyLogo} alt="Master Study Logo" /> */}
          <span>Master</span>
          <span>Study</span>
        </li>
        <li>
          <span>Orofill</span>
        </li>
        <li>
          <span>Campion</span>
        </li>
        <li>
          <span>Campion</span>
        </li>
        <li>
          <span>kiri</span>
        </li>
        <li>
          <span>Comall</span>
        </li>
        <li>
          <span>Modernize</span>
        </li>
      </ul>
    </section>
  );
};

export default Clients;
