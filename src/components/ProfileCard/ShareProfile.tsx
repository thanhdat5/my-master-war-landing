import React from 'react';
function ShareProfile() {
    return (
        <div className="dropdown">
            <a href="#" className="btn btn-light rounded-10 btn-o-outline font-14" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="ti-share"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end font-14" aria-labelledby="dropdownMenuButton3">
                <li>
                    <a className="dropdown-item" href="#"><img height="20" width="20" src="" /><span>Copy Link</span></a>
                </li>
                <li>
                    <a className="dropdown-item" href="#"><img height="20" width="20" src={`${process.env.PUBLIC_URL}/media/images/facebook.png`} /><span>Share on Facebook</span></a>
                </li>
                <li>
                    <a className="dropdown-item" href="#"><img height="20" width="20" src={`${process.env.PUBLIC_URL}/media/images/twitter.svg`} /><span>Share to Twitter</span></a>
                </li>
            </ul>
        </div>
    );
}

export default ShareProfile;
