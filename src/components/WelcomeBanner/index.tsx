import React from 'react';

import NImage from 'components/NImage';

function WelcomeBanner() {
  return (
    <div className="col-xl-2 d-none d-xl-block">
      <div className="tkg-dashboard-welcome-flag">
        <NImage src="welcome-flag.png" alt="Welcome" />
        <div className="tkg-dashboard-welcome-text">
          <span>Chào</span>
          <span>Mừng</span>
          <span>Bạn</span>
          <span>Đến</span>
          <span>Với</span>
          <span>MMW</span>
          <span>!</span>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
