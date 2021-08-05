import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App';

if (process.browser) {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    );
  });
}


