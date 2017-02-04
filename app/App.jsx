import React from 'react';

// components
import NavigationBar from './components/NavigationBar.jsx';
import HeaderMessage from './components/HeaderMessage.jsx';

const appData = {
  title: 'React Blog Demo',
  subtitle: 'A simple modern development environment, built with React, Babel and Webpack. ⚛️✨🚀'
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar data={appData} />
        <main>
          <HeaderMessage data={appData} />
        </main>
      </div>
    )
  }
}
