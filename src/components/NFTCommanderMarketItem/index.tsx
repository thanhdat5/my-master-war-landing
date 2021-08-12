import React from 'react';
import { Link } from 'react-router-dom';

import NImage from 'components/NImage';
import { NROUTES } from 'literals';

function NFTCommanderMarketItem() {
    return (
        <Link
            to={NROUTES.NFT_DETAIL}
            className="col-xl-3 col-lg-4 col-md-6"
        >
            <div className="market-item">
                <div className="d-flex">
                    <div className="market-item-avatar" style={{ backgroundImage: 'url(media/images/tuong/bg-1.png)' }}>
                        <NImage src="tuong/a-3.png" alt="##" />
                    </div>
                    <div className="market-item-wrap">
                        <div className="market-item-info">
                            <NImage className="market-item-icon" src="tuong/t-1.png" alt="##" />
                            <div className="market-item-name" style={{ backgroundImage: 'url(media/images/tuong/n-1.png)' }}>
                                <strong>Chu Thái</strong>
                            </div>
                        </div>
                        <div className="market-item-more">
                            <small>Creator</small>
                            <span>ManuuCastro12</span>
                        </div>
                    </div>
                </div>
                <div className="market-item-price">
                    <div className="market-item-id">
                        <span>#894173</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-1">
                        <div className="d-flex align-items-center">
                            <NImage className="me-1" src="cur.png" alt="MAT" height={'10px'} />
                            <div className="market-item-price-value">
                                <b>0.2088</b>
                            </div>
                        </div>
                        <small className="market-item-time">a minute ago</small>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default NFTCommanderMarketItem;
