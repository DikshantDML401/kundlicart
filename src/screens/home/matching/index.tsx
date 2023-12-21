import React from 'react';
import {MatchingSubHeader} from '../../../components/organisms/subHeader/MatchingSubHeader';

const Matching = () => {
  const subHeaderPropsdata = {
    titleLeft: 'OPEN kUNDLI',
    titleRight: 'NEW MATCHING',
  };
  return (
    <>
      <MatchingSubHeader {...subHeaderPropsdata} />
    </>
  );
};

export default Matching;
