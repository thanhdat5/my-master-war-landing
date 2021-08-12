import React, { useEffect, useState } from 'react';

import NImage from 'components/NImage';
import NFTCommanderMarketItem from 'components/NFTCommanderMarketItem';
import PriceSortModal from './PriceSortModal';
import { SortPriceModel } from 'models/SortPriceModel';
import { SORT_TYPE } from 'config';

function NFTMarketplace() {

    const [sortType, setSortType] = useState<SortPriceModel>(SORT_TYPE[0]);

    useEffect(() => {
        // console.log('=====', sortType);
    }, [sortType]);

    return (
        <div className="market-card mb-md-3 mb-1">
            <div className="market-card-title">
                <NImage src="text-market.png" alt="MARKETPLACE" />
                <div className="market-card-result">
                    Tổng số 100 Tướng
                </div>
                <PriceSortModal
                    selected={sortType}
                    handleSelectSort={setSortType}
                />
            </div>
            <div className="market-card-body">
                <div className="market-card-tab-content">
                    <div className="row">

                        <NFTCommanderMarketItem />
                        <NFTCommanderMarketItem />
                        <NFTCommanderMarketItem />
                        <NFTCommanderMarketItem />
                        <NFTCommanderMarketItem />
                        <NFTCommanderMarketItem />
                        <NFTCommanderMarketItem />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default NFTMarketplace;
