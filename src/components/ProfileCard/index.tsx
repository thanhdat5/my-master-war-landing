import { UserModel } from 'models';
import React, { useState } from 'react';
import BioInfo from './BioInfo';
import CoverImage from './CoverImage';
import ProfileAvatar from './ProfileAvatar';
import ProfileName from './ProfileName';
import SocialInfo from './SocialInfo';
import WalletInfo from './WalletInfo';
export const MOCK_PROFILE_DATA: UserModel = {
    id: "1",
    avatar: 'default-user.png',
    username: "NFTDigitalAssets",
    coverImage: process.env.PUBLIC_URL + '/media/images/cover.jpg',
    totalNFTs: 0,
    walletAddress: "0x7f596eEe6366fD25DAe37EE4D6a0FE2126cf40dc",
    bio: "Motion designer. Crypto artist/collector. Official representative artist Melba Marat.",
    social: "twitter.com/abc",
    verified: true
}
function ProfileCard() {
    const [data, setData] = useState(MOCK_PROFILE_DATA);
    return (
        <div className="o-profile-header text-center">
            <CoverImage image={data.coverImage} />
            <ProfileAvatar avatar={data.avatar} />
            <ProfileName username={data.username} verified={data.verified} />
            <WalletInfo data={data.walletAddress} />
            <BioInfo data={data.bio} />
            <SocialInfo data={data.social} />
        </div>
    );
}

export default ProfileCard;
