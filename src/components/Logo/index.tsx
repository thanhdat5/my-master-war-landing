import React from 'react';
import { Link } from 'react-router-dom';

import { NROUTES } from 'literals';

import NImage from 'components/NImage';

function Logo() {
  return (
    <React.Fragment>
      <Link to={NROUTES.HOMEPAGE} className="tkg-brand navbar-brand">
        <NImage src="logo.png" className="tkg-logo" alt="MyMasterWar" />
      </Link>
    </React.Fragment>
  );
}

export default Logo;
