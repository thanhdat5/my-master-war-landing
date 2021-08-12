import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserModel } from 'models';

import { NROUTES } from 'literals';

import NImage from 'components/NImage';

interface Props {
  data: UserModel;
  width?: string;
  height?: string;
  openProfile?: boolean;
  // onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
function UserAvatar({ data, width = '40px', height = '40px', openProfile = true }: Props) {
  return (
    data && (
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip id="button-tooltip-2">{data.username}</Tooltip>}
      >
        {openProfile ? (
          <Link to={`${NROUTES.PROFILE}?id=${data.id}`}>
            <NImage src={data.avatar} width={width} height={height} />
          </Link>
        ) : (
          <NImage src={data.avatar} width={width} height={height} />
        )}
      </OverlayTrigger>
    )
  );
}

export default UserAvatar;
