import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function NFTQuickLink() {
  return (
    <div className="o-detail-socials">
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip id="button-tooltip-2">Add To Favorites</Tooltip>}
      >
        <a href="#">
          <i className="mdi mdi-heart text-violet" />
        </a>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip id="button-tooltip-2">View on ###</Tooltip>}
      >
        <a href="#">
          <i className="mdi mdi-open-in-new text-violet" />
        </a>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip id="button-tooltip-2">Share</Tooltip>}
      >
        <a href="#">
          <i className="mdi mdi-share-variant text-violet" />
        </a>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip id="button-tooltip-2">Report</Tooltip>}
      >
        <a href="#">
          <i className="mdi mdi-alert-octagon text-violet" />
        </a>
      </OverlayTrigger>
    </div>
  );
}
export default NFTQuickLink;
