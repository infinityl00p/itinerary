import React from 'react';

import * as actions from '../../actions/actions';
import SideNav from './SideNav';
import HomeView from './HomeView';
import EventsView from './EventsView';
import GuestsView from './GuestsView';

export default class WeddingContainer extends React.Component {
  constructor() {
    super();

    this.handleViewChange = this.handleViewChange.bind(this);

    this.state = {
      activeView: 'Home'
    }
  }

  handleViewChange(view) {
    this.setState({ activeView: view });
  }

  renderActiveView() {
    switch(this.state.activeView) {
      case 'Home':
        return <HomeView />;
      case 'Events':
        return <EventsView />;
      case 'Guests':
        return <GuestsView />;
      default:
        return <HomeView />;
    }
  }

  render() {
    return (
      <div id="wedding-container">
        <SideNav
          activeView={this.state.activeView}
          renderView={this.handleViewChange}
        />
        { this.renderActiveView() }
      </div>
    );
  }
}