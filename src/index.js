import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import tachyons from 'tachyons';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
   <App />    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
