import BackButton from 'components/BackButton';
import NImage from 'components/NImage';
import React from 'react';
function NotFound() {
  return (
    <div>
      <BackButton />
      <div className="p-4 text-center">
        <NImage src='404.png' />
      </div>
    </div>
  );
}

export default NotFound;
