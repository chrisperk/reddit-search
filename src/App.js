import React, { Component } from 'react';
import SearchBarContainer from './containers/SearchBarContainer';
import PostListContainer from './containers/PostListContainer';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBarContainer />
        <PostListContainer />
      </div>
    );
  }
}

export default App;
