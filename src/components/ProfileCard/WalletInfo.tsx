import React from 'react';
function WalletInfo({ data }: any) {
    return (
        data && <div className="o-profile-wallet-address mb-4">
            <a className="text-decoration-none sp-wallet-address" href="#">{data}</a>
            <a className="font-600 ms-1 text-secondary" href="#"><i className="mdi mdi-content-copy"></i></a>
        </div>
    );
}

export default WalletInfo;
