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
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyD5qq9iNl_gKpRvEDqd4nCT16jXyh8Y6vs';

//search function 
YTSearch({key:API_KEY, term:'surfboards'},function(data){
  console.log(data);
});

class App extends Component{

  constructor(props){
      super(props);
      this.state = {videos:[] };

      YTSearch({key:API_KEY, term:'surfboards'},(videos) => {
        this.setState({ videos}); //this is when the state name and api respose is the same name
        //this.setState({ videos: videos});
      });
  }

  render(){
      return (
        <div>
            <SearchBar/>
            <VideoList videos={this.state.videos}/>
        </div>
      );
  }
}
//insert component to DOM
ReactDOM.render(
  <App />,
  document.querySelector('.container'));



  
