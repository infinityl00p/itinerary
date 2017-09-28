import React from 'react';

import * as actions from '../../actions/actions';
import SideNav from './SideNav';
import EventsView from './EventsView';

export default class WeddingContainer extends React.Component {
  handleViewChange(view) {
    console.log(view);
  }

  render() {
    return (
      <div id="wedding-container">
        <SideNav renderView={this.handleViewChange} />
        <EventsView />
      </div>
    );
  }
}