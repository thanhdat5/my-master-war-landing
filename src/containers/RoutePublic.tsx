import React from 'react';
import { Route } from 'react-router-dom';

import { NROUTES } from 'literals';

import { RouteProps } from 'types';

function RoutePublic({ component: Component, to = NROUTES.HOMEPAGE, ...rest }: RouteProps) {
  return <Route {...rest} render={props => <Component {...props} />} />;
}

export default RoutePublic;
