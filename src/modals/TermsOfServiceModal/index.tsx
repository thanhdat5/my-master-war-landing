import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import { useShallowEqualSelector } from 'modules/hooks';

import { hideTermsOfServiceModal } from 'actions';

function TermsOfServiceModal() {
  const dispatch = useDispatch();
  const showTermsOfServiceModal = useShallowEqualSelector(s => s.app.showTermsOfServiceModal);
  const [showModal, setShowModal] = useState(false);

  const onAccepted = () => {
    dispatch(hideTermsOfServiceModal(null));
  };

  const onHide = () => {
    $('.terms-of-service-modal').addClass('modal-static');
    setTimeout(() => {
      $('.terms-of-service-modal').removeClass('modal-static');
    }, 300);
  };

  useEffect(() => {
    setShowModal(showTermsOfServiceModal);
  }, [showTermsOfServiceModal]);

  return (
    <Modal
      show={showModal}
      id="termsOfServiceModal"
      className="o-modal p-modal-dialog terms-of-service-modal"
      centered={true}
      size="sm"
      onHide={onHide}
    >
      <Modal.Header>
        <Modal.Title className="h6">Terms of Service</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="text-muted font-15">
          Please take a few minutes to read and understand N-Market{' '}
          <Link target="_blank" to="/terms-of-service">
            Terms of Service
          </Link>{' '}
          To continue, you’ll need to accept the Terms of Service by checking the box.
        </p>
        <div className="mt-4">
          <button type="button" className="btn btn-primary btn-o w-100" onClick={onAccepted}>
            Accept
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default TermsOfServiceModal;
