import React from 'react';
import { useHistory } from 'react-router-dom';

function BackButton() {

  const history = useHistory();

  return (
    <a
      onClick={() => history.goBack()}
      className="btn-back position-absolute"
      style={{ top: '60px', left: '-30px', cursor: 'pointer' }}
    />
  );
}

export default BackButton;
