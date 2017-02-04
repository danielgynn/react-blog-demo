import React from 'react';
import HeaderMessage from './components/HeaderMessage.jsx';

const appData = {
  title: 'React Blog Demo',
  subtitle: 'A simple modern development environment, built with React, Babel and Webpack. ⚛️✨🚀'
}

export default class App extends React.Component {
  render() {
    return (
      <main>
        <HeaderMessage data={appData} />
      </main>
    )
  }
}
