import React from 'react';

import NImage from 'components/NImage';

function NFTImage() {
    return (
        <div className="col-xl-6 col-lg-8 col-md-7 order-xl-2 order-lg-1 order-md-1 order-1 ps-xl-5">
            <div className="detail-item-center text-center text-md-end py-4 d-flex flex-column justify-content-center justify-content-md-end align-items-center">
                <div className="detail-item-qg">
                    <NImage className="detail-item-icon" src="tuong/qg-1.png" alt="##" />
                </div>
                <div className="detail-item-cm" data-bs-toggle="tooltip" data-bs-placement="right" title="Chuyên môn"><span>105</span></div>
                <div className="detail-item-lc" data-bs-toggle="tooltip" data-bs-placement="right" title="Lực chiến"><span>63829</span></div>
                <div className="detail-item-info mb-4">
                    <NImage className="detail-item-icon" src="tuong/t-3.png" alt="##" />
                    <div className="detail-item-name" style={{ backgroundImage: 'url(media/images/tuong/n-2.png)' }}>
                        <strong>Chu Thái</strong>
                    </div>
                </div>
                <NImage src="help.png" height={'450px'} alt="" className="position-relative" />
                <div className="detail-item-creator">
                    <div className="mb-2">
                        <span>ID</span>
                        <strong>#894173</strong>
                    </div>
                    <div>
                        <span>Người tạo</span>
                        <strong>
                            <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="(ronin:5facc0b38480350be74e54766e6738e9fab8edc5)">ManuuCastro12</a>
                        </strong>
                    </div>
                </div>
                <div className="detail-item-slide-controls">
                    <a href="#" className="btn-back-slide" />
                    <a href="#" className="btn-next-slide" />
                </div>
            </div>
        </div>
    );
}
export default NFTImage;


