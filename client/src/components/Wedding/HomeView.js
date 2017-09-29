import React from 'react';

import HomeItem from './HomeItem';

export default class HomeView extends React.Component {
  getDaysRemaining() {
    var weddingDate = new Date(this.props.weddingStore.date);
    var currDate = new Date();

    return Math.trunc((weddingDate - currDate) / (1000*60*60*24));
  }

  getNumberOfEvents() {
    return this.props.weddingStore.events.length;
  }

  getNumberOfGuests() {
    return this.props.weddingStore.guests.length;
  }

  handleDaysClick() {
    console.log('Nothing to do yet');
  }

  handleEventsClick() {
    console.log('Route to EventsView');
  }

  handleGuestsClick() {
    console.log('Route to GuestsView');
  }

  renderItems() {
    return [
      <HomeItem
        key='days'
        counter={this.getDaysRemaining()}
        description='Days to go!'
        onClick={this.handleDaysClick}
      />,
      <HomeItem
        key='events'
        counter={this.getNumberOfEvents()}
        description='Events scheduled'
        onClick={this.handleEventsClick}
      />,
      <HomeItem
        key='guests'
        counter={this.getNumberOfGuests()}
        description='Guests invited'
        onClick={this.handleGuestsClick}
      />
    ];
  }

  render() {
    return (
      <div id="home-view" className="col-md-8">
        <div className="title">
          <p className="name">{this.props.weddingStore.name}</p>
          <p className="description">Your Wedding Event</p>
        </div>
        <div className="tasks">
          <p>Pending tasks</p>
          <div className="task-list">
            <p>No pending tasks.</p>
          </div>
        </div>
        <div className="items">
          <p className="summary">Summary</p>
          { this.renderItems() }
        </div>
      </div>
    );
  }
}