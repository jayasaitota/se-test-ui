import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ApiApp from './Api_App';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// Un comment this and comment App to use server api instead news api
// ReactDOM.render(
//   <ApiApp />,
//   document.getElementById('root')
// );