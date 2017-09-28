import React from 'react';

import SideNavItem from './SideNavItem';

import '../../styles/SideNav.css';

export default class SideNav extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(view) {
    this.props.renderView(view);
  }

  getActive(view) {
    return view === this.props.activeView;
  }

  renderItems() {
    return [
      <SideNavItem
        key='Home'
        text='Home'
        onClick={this.handleClick}
        isActive={this.getActive('Home')}
      />,
      <SideNavItem
        key='Events'
        text='Events'
        onClick={this.handleClick}
        isActive={this.getActive('Events')}
      />,
      <SideNavItem
        key='Guests'
        text='Guests'
        onClick={this.handleClick}
        isActive={this.getActive('Guests')}
      />
    ];

  }

  render() {
    return (
      <div id="side-nav" className="col-md-3">
        {this.renderItems()}
      </div>
    );
  }
}