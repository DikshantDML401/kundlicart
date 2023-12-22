import React from 'react';
import {HomeSubHeader} from '../../../components/organisms/subHeader/homeSubHeader';

const OpenKundli = () => {
  const subHeaderPropsdata = {
    titleLeft: 'OPEN kUNDLI',
    titleRight: 'NEW KUNDLI',
  };
  return (
    <>
      <HomeSubHeader {...subHeaderPropsdata} />
    </>
  );
};

export default OpenKundli;
