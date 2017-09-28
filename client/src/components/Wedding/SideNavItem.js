import React from 'react';

export default class SideNavItem extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.text);
  }

  render() {
    return (
      <div
        className={this.props.isActive ? "side-nav-item active" : "side-nav-item"}
        onClick={this.handleClick}
      >
        <p>{this.props.text}</p>
      </div>
    );
  }
}