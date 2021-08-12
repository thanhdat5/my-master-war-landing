import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useShallowEqualSelector } from 'modules/hooks';

import { RouteProps } from 'types';

function RoutePrivate({ component: Component, to = '/', ...rest }: RouteProps) {
  const walletAddress = useShallowEqualSelector(s => s.app.walletAddress);
  return (
    <Route
      {...rest}
      render={props =>
        walletAddress !== null && walletAddress !== '' ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: to,
              state: { redirect: props.location.pathname, walletAddress },
            }}
          />
        )
      }
    />
  );
}

export default RoutePrivate;
