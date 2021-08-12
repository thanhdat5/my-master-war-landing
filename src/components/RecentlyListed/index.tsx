import React from 'react';

import NImage from 'components/NImage';
import NFTGeneralCard from 'components/NFTGeneralCard';

function RecentlyListed() {
    return (
        <div className="col-lg-6">
            <div className="dashboard-card mb-md-3 mb-1">
                <div className="dashboard-card-title">
                    <NImage src="text-recent-listed.png" alt="RECENTLY LISTED" />
                </div>
                <div className="dashboard-card-body" style={{ minHeight: '320px' }}>
                    <div className="dashboard-card-tabs dashboard-card-tabs-space-2">
                        <ul>
                            <li className="active"><a href="#">Tướng</a></li>
                            <li><a href="#">Trang bị</a></li>
                        </ul>
                    </div>
                    <div className="dashboard-card-tab-content">
                        <div className="row">
                            <NFTGeneralCard />
                            <NFTGeneralCard />
                            <NFTGeneralCard />
                            <NFTGeneralCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecentlyListed;



