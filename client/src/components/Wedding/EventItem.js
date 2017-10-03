import React from 'react';

export default class EventItem extends React.Component {
  render() {
    console.log(this.props.guestCount)
    return (
      <div className="event-item col-md-5" onClick={this.props.onClick}>
        <p className="name">{this.props.data.name}</p>
        <p className="date">{this.props.data.date}</p>
        <p className="time">{this.props.data.time}</p>
        <p className="location">{this.props.data.location}</p>
        <p className="guest-count"><span className="count">{this.props.data.guests.length}</span> guests invited</p>
      </div>
    );
  }
}