import React from 'react';
// import { useDispatch } from 'react-redux';

import NImage from 'components/NImage';

export default function GeneralDashboard() {

    return (
        <div className="dashboard-card mb-md-2 mb-1 pt-lg-5">
            <div className="dashboard-card-title d-block d-lg-none">
                <NImage src="text-tong-quan.png" alt="general" />
            </div>
            <div className="dashboard-card-body">
                <div className="dashboard-card-tabs">
                    <ul>
                        <li className="active"><a href="#">Last 24h</a></li>
                        <li><a href="#">7 days</a></li>
                        <li><a href="#">30 days</a></li>
                    </ul>
                </div>
                <div className="dashboard-card-tab-content">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-5">
                            <div className="dashboard-card-statistics mb-xl-0 mb-4">
                                <div className="dashboard-card-statistics-title">
                                    <span>Total Sale</span>
                                </div>
                                <div className="dashboard-card-statistics-value">
                                    <NImage src="icon-total-sale.png" alt="total-sales" />
                                    <strong>46,512</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-7">
                            <div className="dashboard-card-statistics mb-xl-0 mb-4">
                                <div className="dashboard-card-statistics-title">
                                    <span>Total Volume</span>
                                </div>
                                <div className="dashboard-card-statistics-value">
                                    <NImage src="icon-total-volume.png" alt="total-volumes" />
                                    <strong>8,784.7</strong>
                                    <span>$27,483,823.08</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-5">
                            <div className="dashboard-card-statistics mb-xl-0 mb-lg-0 mb-md-0 mb-4">
                                <div className="dashboard-card-statistics-title">
                                    <span>MAT Sold</span>
                                </div>
                                <div className="dashboard-card-statistics-value">
                                    <NImage src="icon-mat-sold.png" alt="mat-sales" />
                                    <strong>46,401</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-7">
                            <div className="dashboard-card-statistics mb-0">
                                <div className="dashboard-card-statistics-title">
                                    <span>New items</span>
                                </div>
                                <div className="dashboard-card-statistics-value">
                                    <NImage src="icon-new-items.png" alt="new-items" />
                                    <strong>123</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
