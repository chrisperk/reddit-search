import { combineReducers } from 'redux';
import {
  CHANGE_SEARCHTERM,
  SELECT_SEARCHINPUT,
  UNSELECT_SEARCHINPUT
} from '../actions/index';

function searchInputActive(state = false, action) {
  if (action.type === SELECT_SEARCHINPUT) {
    return true;
  }
  if (action.type === UNSELECT_SEARCHINPUT) {
    return false;
  }
  return state;
}

function searchTerm(state = 'funny', action) {
  if (action.type === CHANGE_SEARCHTERM) {
    return action.searchTerm;
  }
  return state;
}

const searchBar = combineReducers({
  searchInputActive,
  searchTerm
});

export default searchBar;
