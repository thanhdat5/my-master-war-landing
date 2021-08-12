import React, { useState } from 'react';

import NImage from 'components/NImage';
import TerritoryItem from './TerritoryItem';

export default function CommanderFilter() {

    const [territories, setTerritories] = useState<string[]>([]);

    const _handleTerritoryChange = (val: string) => {
        if (territories.includes(val)) {
            setTerritories([])
        }
    }

    return (
        <div className="col-xl-2 pe-xl-0">
            <div className="market-card pe-0 mb-md-3 mb-1">
                <div className="market-card-title" style={{ backgroundSize: 'auto 30px' }}>
                    <NImage src="text-filter.png" alt="filter" />
                </div>
                <div className="market-card-body pe-1" style={{ backgroundColor: 'rgb(12 45 39 / 77%)' }}>
                    <div className="market-card-tab-content pe-2">
                        <div className="market-filter-block">
                            <div className="market-filter-title">
                                <span>Quốc gia</span>
                            </div>
                            <div className="market-filter-content d-flex flex-wrap">
                                <TerritoryItem
                                    label='Ngụy'
                                    onClick={val => _handleTerritoryChange(val)}
                                />
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="chkQG2" defaultValue={5} />
                                    <label className="form-check-label" htmlFor="chkQG2">
                                        <b className="text-white fw-bold ms-1">Thục</b>
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="chkQG3" defaultValue={5} />
                                    <label className="form-check-label" htmlFor="chkQG3">
                                        <b className="text-white fw-bold ms-1">Ngô</b>
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="chkQG4" defaultValue={5} />
                                    <label className="form-check-label" htmlFor="chkQG4">
                                        <b className="text-white fw-bold ms-1">Tất cả</b>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="market-filter-block">
                            <div className="market-filter-title">
                                <span>Ngũ hành</span>
                            </div>
                            <div className="market-filter-content d-flex flex-wrap">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="chkNH1" defaultValue={5} />
                                    <label className="form-check-label" htmlFor="chkNH1">
                                        <b className="text-white fw-bold ms-1">Kim</b>
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="chkNH2" defaultValue={5} />
                                    <label className="form-check-label" htmlFor="chkNH2">
                                        <b className="text-white fw-bold ms-1">Mộc</b>
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="chkNH3" defaultValue={5} />
                                    <label className="form-check-label" htmlFor="chkNH3">
                                        <b className="text-white fw-bold ms-1">Thủy</b>
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="chkNH4" defaultValue={5} />
                                    <label className="form-check-label" htmlFor="chkNH4">
                                        <b className="text-white fw-bold ms-1">Hỏa</b>
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="chkNH5" defaultValue={5} />
                                    <label className="form-check-label" htmlFor="chkNH5">
                                        <b className="text-white fw-bold ms-1">Thổ</b>
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="chkNH6" defaultValue={5} />
                                    <label className="form-check-label" htmlFor="chkNH6">
                                        <b className="text-white fw-bold ms-1">Tất cả</b>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="market-filter-block">
                            <div className="market-filter-title">
                                <span>Kỹ năng</span>
                            </div>
                            <div className="market-filter-content d-flex flex-wrap">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="chkKN1" defaultValue={1} />
                                    <label className="form-check-label" htmlFor="chkKN1">
                                        <NImage src="tuong/t-1.png" height={'38px'} />
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="chkKN2" defaultValue={2} />
                                    <label className="form-check-label" htmlFor="chkKN2">
                                        <NImage src="tuong/t-2.png" height={'38px'} />
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="chkKN3" defaultValue={3} />
                                    <label className="form-check-label" htmlFor="chkKN3">
                                        <NImage src="tuong/t-3.png" height={'38px'} />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="market-filter-block">
                            <div className="market-filter-title">
                                <span>Tấn công</span>
                            </div>
                            <div className="market-filter-content">
                                <div className="px-2 market-filter-ranger">
                                    <div id="slider1-range" className="price-filter-range" >
                                    </div>
                                    <div className="d-flex justify-content-between mt-1 text-white">
                                        <span id="min_slider1_value" />
                                        <span id="max_slider1_value" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="market-filter-block">
                            <div className="market-filter-title">
                                <span>Phòng thủ</span>
                            </div>
                            <div className="market-filter-content">
                                <div className="px-2 market-filter-ranger">
                                    <div id="slider2-range" className="price-filter-range">
                                    </div>
                                    <div className="d-flex justify-content-between mt-1 text-white">
                                        <span id="min_slider2_value" />
                                        <span id="max_slider2_value" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="market-filter-block">
                            <div className="market-filter-title">
                                <span>Lực chiến</span>
                            </div>
                            <div className="market-filter-content">
                                <div className="px-2 market-filter-ranger">
                                    <div id="slider3-range" className="price-filter-range">
                                    </div>
                                    <div className="d-flex justify-content-between mt-1 text-white">
                                        <span id="min_slider3_value" />
                                        <span id="max_slider3_value" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


