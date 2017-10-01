import React from 'react';

import GuestList from './GuestList';

import '../../styles/GuestsView.css';

export default class GuestsView extends React.Component {
  renderGuestList() {
    if (this.props.weddingStore.guests.length === 0) {
      return (
        <div className="empty-guest-list">
          <p>You do not currently have any guests added.</p>
          <p>To get started, add a guest.</p>
        </div>
      );
    }

    return (
      <GuestList
        guests={this.props.weddingStore.guests}
        events={this.props.weddingStore.events}
      />
    );
  }

  renderAddGuestButton() {
    return (
      <div className="row add-guest-button">
        <p>Add a new guest</p>
      </div>
    );
  }

  render() {
    return (
      <div id="guests-view" className="col-md-8">
        <div className="title">
          <p className="description">Guest List</p>
          <p className="subheading">Manage your guests below</p>
        </div>
        <div className="guest-container">
          { this.renderAddGuestButton() }
          { this.renderGuestList() }
        </div>
      </div>
    );
  }
}