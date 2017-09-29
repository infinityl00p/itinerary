import React from 'react';

import '../../styles/HomeView.css';

export default class EventsView extends React.Component {
  renderEventsList() {
    if (this.props.weddingStore.events.length === 0) {
      return (
        <div className="empty-event-list">
          <p>You do not currently have any events scheduled. To get started, add an event.</p>
        </div>
      )
    }
  }

  render() {
    return (
      <div id="events-view" className="col-md-8">
        <div className="title">
          <p>Your Scheduled Events</p>
        </div>
        <div className="events-list">
        </div>
      </div>
    );
  }
}