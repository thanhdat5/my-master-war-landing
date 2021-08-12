import React from 'react';
import BackButton from 'components/BackButton';
import NFTDetailCard from 'components/NFTDetailCard';

function NFTDetail() {
  return (
    <React.Fragment>
      <div className="container position-relative">
        <BackButton />
        <NFTDetailCard />
      </div>
    </React.Fragment>
  );
}

export default NFTDetail;
