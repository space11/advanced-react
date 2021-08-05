import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';

if (window) {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.hydrate(
      <App />,
      document.getElementById('root')
    );
  });
}


