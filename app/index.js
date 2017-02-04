import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import SCSS from './styles/app.scss';

const appData = {
  title: 'React Blog Demo',
  subtitle: 'A simple modern development environment, built with React, Babel and Webpack. ⚛️✨🚀'
}

ReactDOM.render(
  <App data={appData}/>, document.getElementById('container')
);
