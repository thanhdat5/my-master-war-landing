import React from 'react';
import { useDispatch } from 'react-redux';

import { showUpdateProfileModal } from 'actions';

import NImage from 'components/NImage';

import ShareProfile from './ShareProfile';

function ProfileAvatar({ avatar }: any) {
  const dispatch = useDispatch();
  const openUpdateProfileModal = (e: any) => {
    e.preventDefault();
    dispatch(showUpdateProfileModal(null));
  };
  return (
    <React.Fragment>
      <div className="o-profile-avatar mb-3">
        <NImage className="rounded-30" src={avatar} width="150px" height="150px" />
        <div className="o-profile-edit">
          <a
            className="btn btn-light rounded-10 btn-o-outline font-14"
            href="#"
            onClick={openUpdateProfileModal}
          >
            <i className="ti-pencil-alt" />
            <span className="ms-2">Edit Profile</span>
          </a>
          <ShareProfile />
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProfileAvatar;
