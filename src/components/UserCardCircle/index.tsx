import React from 'react';
import { Link } from 'react-router-dom';

import { NROUTES } from 'literals';

import NImage from 'components/NImage';

interface Props {
  avatar: string;
  width?: string;
  height?: string;
  className?: string;
  name?: string;
  openProfile?: boolean;
  profileId: string;
}
function UserCardCircle({
  avatar,
  width = '24px',
  height = '24px',
  className = 'rounded-circle',
  name,
  openProfile,
  profileId,
}: Props) {
  return openProfile ? (
    <Link
      to={`${NROUTES.PROFILE}?id=${profileId}`}
      title={name}
      className="text-decoration-none d-flex align-items-center text-muted"
    >
      <NImage src={avatar} width={width} height={height} className={className} />
      {name && <span className="ms-2">{name}</span>}
    </Link>
  ) : (
    <div title={name} className="text-decoration-none d-flex align-items-center text-muted">
      <NImage src={avatar} width={width} height={height} className={className} />
      {name && <span className="ms-2">{name}</span>}
    </div>
  );
}

export default UserCardCircle;
