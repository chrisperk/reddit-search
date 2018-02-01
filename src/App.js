import React, { Component } from 'react';
import SearchBarContainer from './containers/SearchBarContainer';
import PostListContainer from './containers/PostListContainer';
import PostOverlayContainer from './containers/PostOverlayContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <SearchBarContainer />
        <PostListContainer />
        <PostOverlayContainer />
      </div>
    );
  }
}

export default App;
