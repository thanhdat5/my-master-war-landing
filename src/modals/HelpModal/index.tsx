import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { useShallowEqualSelector } from 'modules/hooks';

import { hideHelpModal } from 'actions';

function HelpModal() {
  const dispatch = useDispatch();
  const showHelpModal = useShallowEqualSelector(s => s.app.showHelpModal);
  const [showModal, setShowModal] = useState(false);

  const onHide = () => {
    dispatch(hideHelpModal(null));
  };

  useEffect(() => {
    setShowModal(showHelpModal);
  }, [showHelpModal]);

  return (
    <Modal
      show={showModal}
      id="helpModal"
      className="tgk-modal"
      centered={true}
      size="sm"
      onHide={onHide}
    >
      <Modal.Header>
        <Modal.Title className="h6">Terms of Service</Modal.Title>
      </Modal.Header>

      <Modal.Body />
    </Modal>
  );
}

export default HelpModal;
