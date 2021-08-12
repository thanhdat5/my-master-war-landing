import NImage from 'components/NImage';
import React from 'react';

function NFTInfo() {
    return (
        <div className="col-xl-3 order-xl-1 order-lg-3 order-md-3 order-2 pe-xl-0">
            <div className="pt-xl-3 ps-xl-3">
                <div className="detail-card-ttt detail-card mb-md-3 mb-1">
                    {/* <div class="detail-card-tabs">
                                <a href="#" class="detail-card-tab active">Thông tin</a>
                                <a href="#" class="detail-card-tab">Lịch sử GD</a>
                            </div> */}
                    <div className="detail-card-title pt-0" style={{ backgroundSize: 'auto 30px' }}>
                        <span className="text-nowrap" style={{ fontSize: '20px' }}>Thông tin Tướng</span>
                    </div>
                    <div className="detail-card-body">
                        <div className="detail-info-block">
                            <div className="detail-info-title">
                                <span>Thuộc tính</span>
                            </div>
                            <div className="detail-info-content">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div className="d-flex align-items-center">
                                        <NImage width={'24px'} src="icon-tan-cong.png" alt="" />
                                        <h6 className="text-white mb-0 fw-bold ms-2">Tấn công:</h6>
                                    </div>
                                    <h5 className="text-white mb-0 fw-bold">33,999</h5>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div className="d-flex align-items-center">
                                        <NImage width={'24px'} src="icon-phong-thu.png" alt="" />
                                        <h6 className="text-white mb-0 fw-bold ms-2">Phòng thủ:</h6>
                                    </div>
                                    <h5 className="text-white mb-0 fw-bold">9,469</h5>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <NImage width={'24px'} src="icon-hp.png" alt="" />
                                        <h6 className="text-white mb-0 fw-bold ms-2">HP:</h6>
                                    </div>
                                    <h5 className="text-white mb-0 fw-bold">211,697</h5>
                                </div>
                            </div>
                        </div>
                        <div className="detail-info-block">
                            <div className="detail-info-title">
                                <span>Kỹ năng</span>
                            </div>
                            <div className="detail-info-content">
                                <h6 className="text-white fw-bold">Thần Ma Câu Diệt</h6>
                                <h6 className="text-muted mb-0 fw-bold">Vô Song Oanh Kích</h6>
                            </div>
                        </div>
                        <div className="detail-info-block">
                            <div className="detail-info-title">
                                <span>Duyên phận</span>
                            </div>
                            <div className="detail-info-content d-flex flex-wrap" style={{ columnGap: '10px' }}>
                                <h6 className="text-white fw-bold">Anh Hùng Mỹ Nhân</h6>
                                <h6 className="text-muted fw-bold">Học Phú Ngũ Tra</h6>
                                <h6 className="text-white fw-bold">Loạn Thế Thiên Hạ</h6>
                                <h6 className="text-muted fw-bold">Nhân Trung Lữ Bố</h6>
                                <h6 className="text-muted fw-bold mb-0">Võ Nghệ Cao Cường</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NFTInfo;