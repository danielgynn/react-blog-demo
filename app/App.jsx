import React from 'react';

// components
import NavigationBar from './components/NavigationBar.jsx';
import HeaderMessage from './components/HeaderMessage.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar data={this.props.data} />
        <main>
          <HeaderMessage data={this.props.data} />
        </main>
      </div>
    )
  }
}
