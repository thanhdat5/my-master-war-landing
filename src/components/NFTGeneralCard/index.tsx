import React from 'react';
import { Link } from 'react-router-dom';

import NImage from 'components/NImage';
import { NROUTES } from 'literals';

function NFTGeneralCard() {
    return (

        <Link
            to={NROUTES.NFT_DETAIL}
            className="col-md-6"
        >
            <div className="recently-item">
                <div className="d-flex">
                    <div className="recently-item-avatar" style={{ backgroundImage: 'url(media/images/tuong/bg-1.png)' }}>
                        <NImage src="tuong/a-3.png" alt="##" />
                    </div>
                    <div className="recently-item-wrap">
                        <div className="recently-item-info">
                            <NImage className="recently-item-icon" src="tuong/t-1.png" alt="##" />
                            <div className="recently-item-name" style={{ backgroundImage: 'url(images/tuong/n-1.png)' }}>
                                <strong>Chu Thái</strong>
                            </div>
                        </div>
                        <div className="recently-item-more">
                            <small>Creator</small>
                            <span>ManuuCastro12</span>
                        </div>
                    </div>
                </div>
                <div className="recently-item-price">
                    <div className="recently-item-id">
                        <span>#894173</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-1">
                        <div className="d-flex align-items-center">
                            <NImage className="me-1" src="cur.png" alt="MAT" height={'9px'} />
                            <div className="recently-item-price-value">
                                <b>0.2088</b>
                            </div>
                        </div>
                        <small className="recently-item-time">a minute ago</small>
                    </div>
                </div>
            </div>
        </Link>

    );
}

export default NFTGeneralCard;



