import React from 'react';
import { coverObj, collaborateObj, infoObj } from './Data';
import { Collaborate, ComSection, CoverSection, InfoSection, PartnerSection} from '../../components';

function Home() {
  return (
    <>
      <CoverSection {...coverObj} />
      <Collaborate {...collaborateObj} />
      <PartnerSection />
      <ComSection />
      <InfoSection {...infoObj}/>
    </>
  );
}

export default Home;
