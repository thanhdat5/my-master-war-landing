import React from 'react';

import { SortPriceModel } from 'models/SortPriceModel';

interface Props {
    data: SortPriceModel;
    selected: SortPriceModel;
    handleSelectSort: (e: any) => void;
}

function PriceSortItem({ data, selected, handleSelectSort }: Props) {
    return (
        <li>
            <a
                className={`dropdown-item ${selected.key === data.key ? 'selected' : ''}`}
                onClick={() => handleSelectSort(data)}
            >
                {data.label}
            </a>
        </li>
    );
}

export default PriceSortItem;
