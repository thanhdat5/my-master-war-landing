import React from 'react';
import { Link } from 'react-router-dom';
import { NFTModel } from 'models';

import { NROUTES } from 'literals';

import NImage from 'components/NImage';

interface Props {
  data: NFTModel;
}
function NFTSmallCard({ data }: Props) {
  return (
    data && (
      <div className="o-item-card-row">
        <Link to={`${NROUTES.NFT_DETAIL}?id=${data.id}`}>
          <div className="o-item-card-row-icon">
            <NImage src={data.image} />
          </div>
          <div className="o-item-card-row-info">
            <div>
              <strong className="text-dark font-13">{data.name}</strong>
            </div>
            <div className="text-muted font-12">
              <span className="font-500">{data.priceBSC} BSC</span> ≈ ${data.priceUSD}
            </div>
          </div>
          <div className="o-item-card-row-action">
            <span>
              <i className="ti-arrow-circle-right" />
            </span>
          </div>
        </Link>
      </div>
    )
  );
}

export default NFTSmallCard;
