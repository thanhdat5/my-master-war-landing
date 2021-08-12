import React from 'react';
import { Link } from 'react-router-dom';
import { UserModel } from 'models';

import { NROUTES } from 'literals';

import NImage from 'components/NImage';

interface Props {
  data: UserModel;
}
function ArtistCard({ data }: Props) {
  return (
    <div className="o-item-card-md o-item-card-md-artists">
      <Link to={`${NROUTES.PROFILE}?id=${data.id}`}>
        <div className="o-item-card-md-icon">
          <NImage src={data.avatar} />
        </div>
        <div className="o-item-card-md-info">
          <span
            className="o-item-card-md-nft"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={`${data.totalNFTs} NFTs`}
          >
            <i className="ti-cup me-2" />
            20
          </span>
          <div className="o-item-card-md-name">
            <strong>{data.username}</strong>
          </div>
          <div className="o-item-card-md-price">{data.walletAddress}</div>
        </div>
      </Link>
    </div>
  );
}

export default ArtistCard;
