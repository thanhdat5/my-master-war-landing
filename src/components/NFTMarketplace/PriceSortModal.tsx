import React, { useState } from 'react';

import PriceSortItem from './PriceSortItem';
import { SortPriceModel } from 'models/SortPriceModel';
import { SORT_TYPE } from 'config';

interface Props {
    selected: SortPriceModel;
    handleSelectSort: (e: any) => void;
}

function PriceSortModal({ selected, handleSelectSort }: Props) {

    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className="market-card-order dropdown">
            <button
                onClick={() => setVisible(prev => !prev)}
                className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {selected.label}
            </button>
            <ul className="dropdown-menu dropdown-menu-end" style={{ "display": visible ? "block" : "none" }}>
                {SORT_TYPE.map((item, idx) => {
                    return (
                        <PriceSortItem
                            key={idx + 'sort_item'}
                            data={item}
                            selected={selected}
                            handleSelectSort={(val) => {
                                handleSelectSort(val);
                                setVisible(false);
                            }}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default PriceSortModal;
