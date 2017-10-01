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

  renderSectionHeadings() {
    return (
      <div className="section-headings col-md-12">
        <span className="name col-md-2">Name</span>
        <span className="invited col-md-2">Invite sent?</span>
        <span className="contact-type col-md-2">Contact Type</span>
        <span className="contact-info col-md-2">Contact Info</span>
        <span className="events col-md-4">Events</span>
      </div>
    );
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
        { this.renderSectionHeadings() }
        { this.renderGuestItems() }
      </div>
    );
  }
}