import React from 'react';
function NFTChainInfo() {
    return (
        <div className="py-4 font-13">
            <div className="row mb-2">
                <div className="col">Contract Address</div>
                <div className="col w-50"><a href="#">0xafba...e7a7</a></div>
            </div>
            <div className="row mb-2">
                <div className="col">Token ID</div>
                <div className="col w-50">709</div>
            </div>
            <div className="row mb-2">
                <div className="col">Blockchain</div>
                <div className="col w-50">Ethereum</div>
            </div>
        </div>
    );
}
export default NFTChainInfo;