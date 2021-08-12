import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { useShallowEqualSelector } from 'modules/hooks';

import { hideUpdateProfileModal } from 'actions';

function UpdateProfileModal() {
  const dispatch = useDispatch();
  const showUpdateProfileModal = useShallowEqualSelector(s => s.app.showUpdateProfileModal);
  const [showModal, setShowModal] = useState(false);

  const onHide = () => {
    dispatch(hideUpdateProfileModal(null));
  };

  const onSubmitted = (e: any) => {
    dispatch(hideUpdateProfileModal(null));
  };

  useEffect(() => {
    setShowModal(showUpdateProfileModal);
  }, [showUpdateProfileModal]);

  return (
    <Modal
      show={showModal}
      id="updateProfileModal"
      className="o-modal p-modal-dialog"
      centered={true}
      size="lg"
      onHide={onHide}
    >
      <form>
        <Modal.Header closeButton>
          <Modal.Title className="h6">Update Profile</Modal.Title>
        </Modal.Header>

        <Modal.Body className="px-4 text-dark">
          <div className="row">
            <div className="col-md-6 pe-md-5 order-md-1 order-2">
              <div className="mb-3">
                <label htmlFor="user-name" className="form-label font-13">
                  Username <span className="text-danger">*</span>
                </label>
                <input
                  name="user-name"
                  id="user-name"
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  maxLength={30}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="social-link" className="form-label font-13">
                  Social Link
                </label>
                <input
                  name="social-link"
                  id="social-link"
                  type="text"
                  className="form-control mr-2"
                  placeholder="Social Link : Twitter, Facebook or Instagram"
                />
              </div>
              <div className="mb-0">
                <label htmlFor="bio" className="form-label font-13">
                  Bio <span className="text-danger">*</span>
                </label>
                <textarea
                  name="bio"
                  id="bio"
                  rows={3}
                  className="form-control"
                  placeholder="About me (max 200 characters)"
                  maxLength={200}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 order-md-2 order-1">
              <div className="mb-3">
                <label htmlFor="f-cover" className="form-label font-13">
                  Cover Background
                </label>
                <div className="upload-file-wrap">
                  <input id="f-cover" name="f-cover" type="file" className="d-none" />
                  <div className="upload-file-description">Drag &amp; Drop your image here</div>
                  <div className="upload-file-note">PNG, GIF, JPEG, JPG (max 8Mb)</div>
                </div>
              </div>
              <div className="mb-md-0 mb-3">
                <label htmlFor="f-avatar" className="form-label font-13">
                  Avatar
                </label>
                <div className="upload-file-wrap">
                  <input id="f-avatar" name="f-avatar" type="file" className="d-none" />
                  <div className="upload-file-description">Drag &amp; Drop your image here</div>
                  <div className="upload-file-note">PNG, GIF, JPEG, JPG (max 8Mb)</div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
          <button type="submit" className="btn btn-primary btn-o px-5" onClick={onSubmitted}>
            Update Profile
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default UpdateProfileModal;
