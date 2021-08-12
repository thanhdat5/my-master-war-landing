import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import $ from 'jquery';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    $('html, body').animate({ scrollTop: 0 }, 300);
  }, [pathname]);
  return <React.Fragment />;
}

export default ScrollToTop;
