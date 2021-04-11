import React from 'react';
import { coverObj, programsObj, statisticsObjOne, statisticsObjTwo, communityObj, infoObj } from './Data';
import { Statistics, Community, Cover, Information, PartnerSection, Programs} from '../../components';

function Home() {
  return (
    <>
      <Cover {...coverObj}/>
      <Programs {...programsObj}/>
      <Statistics {...statisticsObjOne} />
      <Statistics {...statisticsObjTwo} />
      {/* <PartnerSection /> */}
      <Community {...communityObj}/>
      <Information {...infoObj}/>
    </>
  );
}

export default Home;
