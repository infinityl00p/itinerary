import React from 'react';

export default class HomeItem extends React.Component {
  render() {
    return (
      <div className="home-item col-md-3" onClick={this.props.onClick}>
        <p className="counter">{this.props.counter}</p>
        <p className="description">{this.props.description}</p>
      </div>
    );
  }
}