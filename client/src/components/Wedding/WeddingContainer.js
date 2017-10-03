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
      activeView: 'Guests'
    }
  }

  handleViewChange(view) {
    this.setState({ activeView: view });
  }

  renderActiveView() {
    switch(this.state.activeView) {
      case 'Home':
        return <HomeView weddingStore={this.props.weddingStore} />;
      case 'Events':
        return <EventsView weddingStore={this.props.weddingStore} />;
      case 'Guests':
        return <GuestsView weddingStore={this.props.weddingStore} />;
      default:
        return <HomeView weddingStore={this.props.weddingStore} />;
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