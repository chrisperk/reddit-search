import { combineReducers } from 'redux';
import {
  GET_SEARCHRESULTS_START,
  GET_SEARCHRESULTS_SUCCESS,
  GET_SEARCHRESULTS_ERROR
} from '../actions/index';

function searching(state = false, action) {
  if (action.type === GET_SEARCHRESULTS_START) {
    console.log('searching');
    return true;
  }
  if (action.type === GET_SEARCHRESULTS_SUCCESS) {
    console.log('search success');
    return false;
  }
  if (action.type === GET_SEARCHRESULTS_ERROR) {
    console.log('search error');
    return false;
  }
  return state;
}

function searchResults(state = [], action) {
  if (action.type === GET_SEARCHRESULTS_SUCCESS) {
    console.log('results:', action.results);
    return action.results;
  }
  return state;
}

function searchError(state = false, action) {
  if (action.type === GET_SEARCHRESULTS_ERROR) {
    console.log('error:', action.message);
    return action.message;
  }
  return state;
}

function selectedPost(state = {}, action) {
  return state;
}

const postList = combineReducers({
  searching,
  searchResults,
  searchError,
  selectedPost
});

export default postList;
