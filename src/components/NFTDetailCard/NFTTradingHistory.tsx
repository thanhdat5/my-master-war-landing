import React, { useState } from 'react';

import NImage from 'components/NImage';

function NFTTradingHistory() {
    return (
        <div className="col-xl-3 col-lg-4 col-md-5 order-xl-3 order-lg-2 order-md-2 order-3">
            <div className="detail-card px-0">
                <div className="detail-card-title pt-2" style={{ backgroundSize: 'auto 30px' }}>
                    <span className="text-nowrap" style={{ fontSize: '20px' }}>Thông tin giao dịch</span>
                </div>
                <div className="detail-card-body">
                    <div className="detail-info-block">
                        <div className="detail-info-title mb-0 d-flex align-items-center justify-content-between">
                            <span>Giá bán</span>
                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip">
                                <NImage src="icon-info.png" height={'22px'} />
                            </div>
                        </div>
                        <div className="detail-info-content">
                            <div className="detail-item-price d-flex align-items-center">
                                <NImage className="me-2" src="cur.png" alt="MAT" height={'18px'} />
                                <div className="detail-item-price-value">
                                    <b>0.2088</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="button" className="tkg-button-v2">
                            Mua ngay
                        </button>
                        {/* <button type="button" class="tkg-button-v2">
                                    Đăng nhập
                                </button> */}
                    </div>
                </div>
            </div>
            <div className="detail-card px-0" style={{ marginTop: '20px' }}>
                <div className="detail-card-title pt-0" style={{ backgroundSize: 'auto 30px' }}>
                    <span className="text-nowrap" style={{ fontSize: '20px' }}>Lịch sử giao dịch</span>
                </div>
                <div className="detail-card-body py-2 px-2" style={{ minHeight: '220px' }}>
                    <div className="table-responsive px-2" style={{ maxHeight: '220px', overflowY: 'auto' }}>
                        <table className="table detail-table mb-0">
                            <thead>
                                <tr>
                                    <th>Người bán</th>
                                    <th>Người mua</th>
                                    <th className="text-end">Định giá</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="#">
                                            <div className="td-main-value">Tibll2</div>
                                            <div className="td-sub-value">5facc56...8edc554</div>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#">
                                            <div className="td-main-value">StrongHands</div>
                                            <div className="td-sub-value">5facc56...8edc554</div>
                                        </a>
                                    </td>
                                    <td className="text-end">
                                        <div className="td-main-value">0.0099 ETH</div>
                                        <div className="td-sub-value">Jul 02, 2021</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">
                                            <div className="td-main-value">Tibll2</div>
                                            <div className="td-sub-value">5facc56...8edc554</div>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#">
                                            <div className="td-main-value">StrongHands</div>
                                            <div className="td-sub-value">5facc56...8edc554</div>
                                        </a>
                                    </td>
                                    <td className="text-end">
                                        <div className="td-main-value">0.0099 ETH</div>
                                        <div className="td-sub-value">Jul 02, 2021</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">
                                            <div className="td-main-value">Tibll2</div>
                                            <div className="td-sub-value">5facc56...8edc554</div>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#">
                                            <div className="td-main-value">StrongHands</div>
                                            <div className="td-sub-value">5facc56...8edc554</div>
                                        </a>
                                    </td>
                                    <td className="text-end">
                                        <div className="td-main-value">0.0099 ETH</div>
                                        <div className="td-sub-value">Jul 02, 2021</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <div class="d-flex align-items-center justify-content-center w-100 h-100">
                                <div class="text-white-50">Chưa có lịch sử giao dịch</div>
                            </div> */}
                </div>
            </div>
        </div>
    );
}

export default NFTTradingHistory;
