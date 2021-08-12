import React from 'react';
function SocialInfo({ data }: any) {
    return (
        data && <div className="o-profile-social"><a className="text-muted font-14" href={data}>{data}</a></div>
    );
}

export default SocialInfo;
