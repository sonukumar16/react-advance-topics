import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/* 
StrictMode is double checking the components as well as all of their descendants, will have the checks.
Advantages of using StrictMode of rects.js:- 

1  Identifying components with unsafe life cycles
2  Warning about legacy string ref API usage
3  Warning about deprecated findDOMNode usage
4  Detecting unexpected side effects
5  Detecting legacy context API
*/