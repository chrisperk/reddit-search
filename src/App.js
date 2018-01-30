import React, { Component } from 'react';
import SearchBarContainer from './containers/SearchBarContainer';
import PostListContainer from './containers/PostListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <SearchBarContainer />
        <PostListContainer />
      </div>
    );
  }
}

export default App;
