import { combineReducers } from 'redux';
import {
  CHANGE_SEARCHTERM,
  SELECT_SEARCHINPUT,
  UNSELECT_SEARCHINPUT
} from '../actions/index';

function searchInputActive(state = false, action) {
  if (action.type === SELECT_SEARCHINPUT) {
    console.log('selected');
    return true;
  }
  if (action.type === UNSELECT_SEARCHINPUT) {
    console.log('unselected');
    return true;
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
