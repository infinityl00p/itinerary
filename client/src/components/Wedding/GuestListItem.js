import React from 'react';

export default class GuestListItem extends React.Component {
  render() {
    return (
      <div className="guest-list-item col-md-12">
        <span className="name col-md-4">
          { this.props.data.name }
        </span>
        <span className="invited col-md-1">
          { this.props.data.inviteSent ? 'YES' : 'NO' }
        </span>
        <span className="contact-type col-md-1">
          { this.props.data.contactType }
        </span>
        <span className="contact-info col-md-2">
          { this.props.data.contactInfo }
        </span>
        <span className="events col-md-2">
          { this.props.events }
        </span>
      </div>
    );
  }
}