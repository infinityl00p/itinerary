import React from 'react';

import '../styles/TopNav.css';

export default class TopNav extends React.Component {
  render() {
    return (
      <div id="top-nav" className="col-md-12">
        <div className="title col-md-3">
          <p>Wedding Itinerary</p>
        </div>
      </div>
    );
  }
}