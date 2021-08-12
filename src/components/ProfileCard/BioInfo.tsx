import React from 'react';
function BioInfo({ data }: any) {
    return (
        data && <div className="o-profile-bio mb-2 text-muted font-14">{data}</div>
    );
}

export default BioInfo;
