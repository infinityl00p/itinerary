import React from 'react';
import _ from 'lodash';

import GuestListItem from './GuestListItem';

export default class GuestList extends React.Component {
  // More efficient if we pass around a Hashmap of Event id->name
  getEventNames(eventIds) {
    return this.props.events.map((event) => {
      if (_.contains(eventIds, event.id)) {
        return event.name
      }
    });
  }

  renderGuestItems() {
    return this.props.guests.map((guest) => {
      var events = this.getEventNames(guest.events);

      return (
        <GuestListItem
          data={guest}
          key={guest.id}
          events={events}
        />
      );
    });
  }

  render() {
    return (
      <div className="guest-list">
        { this.renderGuestItems() }
      </div>
    );
  }
}