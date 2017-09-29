import React from 'react';

export default class EventItem extends React.Component {
  render() {
    console.log(this.props.guestCount)
    return (
      <div className="event-item col-md-5" onClick={this.props.onClick}>
        <p className="name">{this.props.name}</p>
        <p className="date">{this.props.date}</p>
        <p className="time">{this.props.time}</p>
        <p className="location">{this.props.location}</p>
        <p className="guest-count"><span className="count">{this.props.guestCount}</span> guests invited</p>
      </div>
    );
  }
}