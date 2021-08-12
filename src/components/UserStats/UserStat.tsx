import React from 'react';
interface Props {
    icon: string;
    value: string;
    title: string;
    className?: string;
}
function UserStat({ icon, value, title, className = 'text-violet' }: Props) {
    return (
        <div className="o-user-stat">
            <div className="pb-2">
                <i className={`${icon} ${className} font-24`}></i>
            </div>
            <div className={`${className} font-13`}><b>{value}</b></div>
            <div className="text-muted font-12 lh-1">{title}</div>
        </div>
    );
}

export default UserStat;
