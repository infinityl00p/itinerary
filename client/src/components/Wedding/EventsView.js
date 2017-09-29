import React from 'react';

import '../../styles/EventsView.css';

export default class EventsView extends React.Component {
  constructor() {
    super();

  }

  handleCreateClick() {
    console.log('I will create an event');
  }

  renderEventsList() {
    if (this.props.weddingStore.events.length > 0) {
      return (
        <div className="empty-event-list">
          <p>You do not currently have any events scheduled.</p>
          <p>To get started, add an event.</p>
        </div>
      );
    }
  }

  renderCreateEventButton() {
    // TODO: Make this into a button component
    return (
      <div className="create-event-button" onClick={this.handleCreateClick}>
        <p>Add a new event</p>
      </div>
    );
  }

  render() {
    return (
      <div id="events-view" className="col-md-8">
        <div className="title">
          <p className="description">Your Scheduled Events</p>
          <p className="subheading">Click on an event below to view details or edit</p>
        </div>
        <div className="events-list">
          { this.renderEventsList() }
          { this.renderCreateEventButton() }
        </div>
      </div>
    );
  }
}