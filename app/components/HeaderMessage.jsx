import React from 'react';

export default class HeaderMessage extends React.Component {
  render() {
    return (
      <header>
        <h1>Welcome to {this.props.data.title}.</h1>
        <h2>{this.props.data.subtitle}</h2>
      </header>
    )
  }
}
