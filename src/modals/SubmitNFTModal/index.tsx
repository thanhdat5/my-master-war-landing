import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { useShallowEqualSelector } from 'modules/hooks';

import { hideSubmitNFTModal, showSubmitNFTSuccessModal } from 'actions';

function SubmitNFTModal() {
  const dispatch = useDispatch();
  const showSubmitNFTModal = useShallowEqualSelector(s => s.app.showSubmitNFTModal);
  const [showModal, setShowModal] = useState(false);

  const onHide = () => {
    dispatch(hideSubmitNFTModal(null));
  };

  const onSubmitted = (e: any) => {
    dispatch(hideSubmitNFTModal(null));
    dispatch(showSubmitNFTSuccessModal(null));
  };

  useEffect(() => {
    setShowModal(showSubmitNFTModal);
  }, [showSubmitNFTModal]);

  return (
    <Modal
      show={showModal}
      id="submitNFTModal"
      className="modal-smx o-modal"
      centered={true}
      size="sm"
      onHide={onHide}
    >
      <form>
        <Modal.Header closeButton>
          <Modal.Title className="h6">Submit NFT</Modal.Title>
        </Modal.Header>

        <Modal.Body className="px-3 text-dark">
          <div className="mb-3">
            <label htmlFor="f-image" className="form-label font-13">
              NFT Image <span className="text-danger">*</span>
            </label>
            <div className="upload-file-wrap">
              <input id="f-image" name="f-image" type="file" className="d-none" />
              <div className="upload-file-description font-14">Drag &amp; Drop your image here</div>
              <div className="upload-file-note font-13">PNG, GIF, JPEG, JPG (max 8Mb)</div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="nft-name" className="form-label font-13">
              Name <span className="text-danger">*</span>
            </label>
            <input
              id="nft-name"
              name="nft-name"
              type="text"
              className="form-control"
              placeholder="NFT Name"
              maxLength={30}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nft-description" className="form-label font-13">
              Description <span className="text-danger">*</span>
            </label>
            <textarea
              id="nft-description"
              name="nft-description"
              rows={3}
              className="form-control"
              placeholder="NFT Description (max 300 characters)"
              maxLength={300}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nft-price" className="form-label font-13">
              Price <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <input
                id="nft-price"
                name="nft-price"
                type="number"
                className="form-control me-2"
                placeholder="NFT Price"
                required
              />
              <div className="input-group-append">
                <span className="input-group-text font-14" style={{ borderRadius: '10px' }}>
                  BSC
                  <i className="mdi mdi-check-circle ms-1 lh-1" />
                </span>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between font-14">
            <span>Service Fee</span>
            <span>2.5%</span>
          </div>
          <div className="d-flex align-items-center justify-content-between font-14">
            <span>You will receive</span>
            <span>USD 6.04</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" className="btn btn-primary btn-o w-100" onClick={onSubmitted}>
            Approve
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default SubmitNFTModal;
