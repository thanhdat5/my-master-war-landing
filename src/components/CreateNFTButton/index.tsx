import React from 'react';
import { useDispatch } from 'react-redux';

import { showSubmitNFTModal } from 'actions';

import NImage from 'components/NImage';

function CreateNFTButton() {
  const dispatch = useDispatch();
  const openSubmitNFTModal = (e: any) => {
    e.preventDefault();
    dispatch(showSubmitNFTModal(null));
  };
  return (
    <div className="mt-4">
      <a
        href="#"
        className="d-flex align-items-center text-decoration-none btn btn-primary py-2"
        onClick={e => {
          openSubmitNFTModal(e);
        }}
      >
        <NImage src="btn-create.png" width="32" height="32" className="rounded-10 me-2" />
        <div className="lh-1-5 text-start ps-1">
          <div className="font-13">
            <strong>CREATE</strong>
          </div>
          <div className="font-13 opacity-8">Submit your NFTs</div>
        </div>
      </a>
    </div>
  );
}

export default CreateNFTButton;
