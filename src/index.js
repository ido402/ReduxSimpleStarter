import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail.js';
const API_KEY = 'AIzaSyD5qq9iNl_gKpRvEDqd4nCT16jXyh8Y6vs';

//search function 
YTSearch({key:API_KEY, term:'surfboards'},function(data){
  console.log(data);
});

class App extends Component{

  constructor(props){
      super(props);
      this.state = {
        videos:[],
        selectedVideo: null
     };

     this.videoSearch('dallas cowboys highlights');
  }

  videoSearch(term){
      YTSearch({key:API_KEY, term:term},(videos) => {
        this.setState({
          videos:videos,
          selectedVideo: videos[0]
        }); //this is when the state name and api respose is the same name
        //this.setState({ videos: videos});
      });
  }

  render(){
      const videoSearch = _.debounce((term) =>{this.videoSearch(term)},300);

      return (
        <div>
            <SearchBar onSearchTermChange = {videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos}
              />
        </div>
      );
  }
}
//insert component to DOM
ReactDOM.render(
  <App />,
  document.querySelector('.container'));



  
