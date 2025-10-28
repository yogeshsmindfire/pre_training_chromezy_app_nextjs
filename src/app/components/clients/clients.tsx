import Image from 'next/image';
import './Clients.css';

import MasterStudyLogo from '../../../../public/clients/masterStudy.png';
import FonniaLogo from '../../../../public/clients/fonnia.png';
import OrofillLogo from '../../../../public/clients/orofill.png';
import CampionLogo from '../../../../public/clients/campion.png';
import KiriLogo from '../../../../public/clients/kiri.png';
import ComallLogo from '../../../../public/clients/comall.png';
import ModernizeLogo from '../../../../public/clients/modernize.png';

const Clients = () => {
  return (
    <section className='clients'>
      <ul>
        <li>
          <Image
            src={MasterStudyLogo}
            alt='Master Study Logo'
            width={120}
            height={30}
          />
        </li>
        <li>
          <Image src={OrofillLogo} alt='orofill Logo' width={100} height={40} />
        </li>
        <li>
          <Image src={CampionLogo} alt='campion Logo' width={100} height={50} />
        </li>
        <li>
          <Image src={KiriLogo} alt='kiri Logo' width={100} height={40} />
        </li>
        <li>
          <Image src={FonniaLogo} alt='fonnia Logo' width={100} height={40} />
        </li>
        <li>
          <Image src={ComallLogo} alt='comall Logo' width={100} height={30} />
        </li>
        <li>
          <Image
            src={ModernizeLogo}
            alt='modernize logo'
            width={100}
            height={25}
          />
        </li>
      </ul>
    </section>
  );
};

export default Clients;
