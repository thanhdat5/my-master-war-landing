import React from 'react';
function CoverImage({ image = process.env.PUBLIC_URL + '/media/images/cover.jpg'}: any) {
    return (
        <div className="o-profile-header-cover" style={{ backgroundImage: `url(${image})` }}></div>
    );
}

export default CoverImage;
