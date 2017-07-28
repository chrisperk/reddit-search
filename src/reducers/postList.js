import { combineReducers } from 'redux';

function searching(state = false, action) {
  return state;
}

function searchResults(state = [], action) {
  return state;
}

function searchError(state = false, action) {
  return state;
}

function selectedPost(state = {}, action) {
  return state;
}

const postList = combineReducers({
  searching,
  searchResults,
  selectedPost
});

export default postList;
