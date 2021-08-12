import React from 'react';
import ConfirmSubmitNFTModal from 'modals/ConfirmSubmitNFTModal';
import SubmitNFTModal from 'modals/SubmitNFTModal';
import TermsOfServiceModal from 'modals/TermsOfServiceModal';

function Footer() {
  return (
    <React.Fragment>
      <TermsOfServiceModal />
      <SubmitNFTModal />
      <ConfirmSubmitNFTModal />
    </React.Fragment>
  );
}
export default Footer;
