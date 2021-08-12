import React from 'react';
import { Link } from 'react-router-dom';
import { NFTModel } from 'models';

import { NROUTES } from 'literals';

import NImage from 'components/NImage';

interface Props {
  data: NFTModel;
}
function NFTCard({ data }: Props) {
  return (
    data && (
      <div className="o-item-card-md">
        <Link to={`${NROUTES.NFT_DETAIL}?id=${data.id}`}>
          <div className="o-item-card-md-icon">
            <i className="mdi mdi-eye" />
            <NImage src={data.image} />
          </div>
          <div className="o-item-card-md-info">
            <span className="o-item-card-md-like">
              <i className="ti-heart me-2" />
              {data.likedCount}
            </span>
            <div className="o-item-card-md-name">
              <strong>Death #1</strong>
            </div>
            <div className="o-item-card-md-price">
              <span className="font-500">{data.priceBSC} BSC</span> ≈ ${data.priceUSD}
            </div>
            <div className="o-item-card-md-more">
              <span>{data.createdDate}</span>
              <span>{data.viewedCount} viewed</span>
            </div>
          </div>
        </Link>
      </div>
    )
  );
}

export default NFTCard;
