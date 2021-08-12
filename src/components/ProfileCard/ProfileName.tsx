import React from 'react';
function ProfileName({ username, verified = false }: any) {
    return (
        username && <div className="o-profile-name d-flex align-items-center justify-content-center mb-2">
            <h2 className="me-1 mb-0">{username}</h2>
            {verified && <img data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" src={`${process.env.PUBLIC_URL}/media/images/blue_checkmark.webp`} width="24" />}
        </div>
    );
}

export default ProfileName;
