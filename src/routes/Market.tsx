import React, { useState } from 'react';

import CategoryFilter from 'components/CategoryFilter';
import CommanderFilter from 'components/CommanderFilter';
import NFTMarketplace from 'components/NFTMarketplace';

function Market() {

    return (
        <div className="container-fluid ps-xl-5">
            <div className="row mt-xl-4 mt-lg-5 mt-3">
                <CategoryFilter />
                <CommanderFilter />
                <div className="col-xl-9">
                    <NFTMarketplace />
                </div>
            </div>
        </div>
    );
}

export default Market;
