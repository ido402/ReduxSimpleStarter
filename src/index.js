/*import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));*/
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD5qq9iNl_gKpRvEDqd4nCT16jXyh8Y6vs';

//Create a new component
const App = () => {
  return (
    <div>
        <SearchBar/>
    </div>
  );
}
//insert component to DOM
ReactDOM.render(
  <App />,
  document.querySelector('.container'));



  
