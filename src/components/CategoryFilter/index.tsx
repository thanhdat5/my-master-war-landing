import React from 'react';

import NImage from 'components/NImage';

export default function CategoryFilter() {

    return (
        <div className="col-xl-1 text-end pe-lg-2">
            <div className="d-flex flex-xl-column market-category">
                <div className="mb-xl-5 mb-2 mt-xl-5 pt-xl-3 ms-3 ms-xl-0">
                    <a href="#" className="active">
                        <NImage src="filter/icon-tuong.png" alt="Filter" />
                    </a>
                </div>
                <div className="mb-xl-5 mb-2 ms-3 ms-xl-0">
                    <a href="#">
                        <NImage src="filter/icon-trang-bi.png" alt="Filter" />
                    </a>
                </div>
            </div>
        </div>
    );
}
