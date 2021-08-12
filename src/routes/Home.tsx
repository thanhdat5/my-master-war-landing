import React, { useState } from 'react';

import WelcomeBanner from 'components/WelcomeBanner';
import GeneralDashboard from 'components/GeneralDashboard';
import RecentlyListed from 'components/RecentlyListed';
import RecentlySold from 'components/RecentlySold';

function Home() {

  return (
    <div className="container-fluid">
      <div className="row">
        <WelcomeBanner />
        <div className="col-xl-10">
          <GeneralDashboard />
          <div className="row">
            <RecentlyListed />
            <RecentlySold/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
