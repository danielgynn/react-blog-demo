import React from 'react';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <nav>
        <a href="#">{this.props.data.title}</a>
      </nav>
    )
  }
}
