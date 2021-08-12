import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { useShallowEqualSelector } from 'modules/hooks';

import { hideSubmitNFTSuccessModal } from 'actions';

function ConfirmSubmitNFTModal() {
  const dispatch = useDispatch();
  const showSubmitNFTSuccessModal = useShallowEqualSelector(s => s.app.showSubmitNFTSuccessModal);
  const [showModal, setShowModal] = useState(false);

  const onHide = () => {
    dispatch(hideSubmitNFTSuccessModal(null));
  };

  useEffect(() => {
    setShowModal(showSubmitNFTSuccessModal);
  }, [showSubmitNFTSuccessModal]);

  return (
    <Modal
      show={showModal}
      id="confirmSubmitModal"
      className="o-modal"
      centered={true}
      size="sm"
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title className="h6">[NFT Name]</Modal.Title>
      </Modal.Header>

      <Modal.Body className="px-3 text-dark">
        <div className="d-flex align-items-center justify-content-between font-14 mb-3">
          <span>File size</span>
          <span>3.1 Mb</span>
        </div>
        <div className="d-flex align-items-center justify-content-between font-14">
          <span>Storage Fee</span>
          <span>USD 2.64</span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button type="submit" className="btn btn-primary btn-o w-100" onClick={onHide}>
          Confirm
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmSubmitNFTModal;
