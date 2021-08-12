import React from 'react';
import { UserStatsModel } from 'models';

import UserStat from './UserStat';

interface Props {
  account: string | null;
}
function UserStats({ account }: Props) {
  const data: UserStatsModel = {
    nfts: {
      icon: 'ti-cup',
      value: '100',
      title: 'nfts',
    },
    balance: {
      icon: 'ti-wallet',
      value: '$100,252',
      title: 'balance',
    },
  };
  return (
    data && (
      <div className="o-user-stats">
        {data.nfts && (
          <UserStat icon={data.nfts.icon} value={data.nfts.value} title={data.nfts.title} />
        )}
        {data.balance && (
          <UserStat
            icon={data.balance.icon}
            value={data.balance.value}
            title={data.balance.title}
          />
        )}
      </div>
    )
  );
}

export default UserStats;
