import React from 'react';

interface Props {
    label: string;
    onClick: (e: string) => void;
}

export default function TerritoryItem({ label, onClick }: Props) {

    return (
        <div className="form-check form-check-inline">
            <input onClick={() => onClick(label)} className="form-check-input" type="checkbox" id="chkQG1" defaultValue={5} />
            <label className="form-check-label" htmlFor="chkQG1">
                <b className="text-white fw-bold ms-1">{label}</b>
            </label>
        </div>
    );
}


