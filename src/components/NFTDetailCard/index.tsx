import React from 'react';
import { Link } from 'react-router-dom';
import NFTImage from './NFTImage';
import NFTInfo from './NFTInfo';
import NFTTradingHistory from './NFTTradingHistory';

// import NImage from 'components/NImage';
// import NPanel from 'components/NPanel';
// import NFTChainInfo from './NFTChainInfo';
// import NFTInfo from './NFTInfo';
// import NFTPriceChart from './NFTPriceChart';
// import NFTQuickLink from './NFTQuickLink';
function NFTDetailCard() {

    return (
        <>
            <div className="row mt-4 mb-5">
                <NFTInfo />
                <NFTImage />
                <NFTTradingHistory />
            </div>
        </>
    );
}

export default NFTDetailCard;
