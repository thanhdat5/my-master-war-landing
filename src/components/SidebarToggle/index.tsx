import React from 'react';
import $ from 'jquery';

function SidebarToggle() {
  const handleClickSidebarToggle = () => {
    $('#oSidebar').toggleClass('show');
  };
  return (
    <React.Fragment>
      <a
        className="text-decoration-none font-24 me-3 text-dark"
        onClick={() => handleClickSidebarToggle()}
      >
        <i className="ti-menu" />
      </a>
    </React.Fragment>
  );
}

export default SidebarToggle;
