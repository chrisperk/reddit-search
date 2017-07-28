import { combineReducers } from 'redux';

function searchInputActive(state = false, action) {
  return state;
}

function searchTerm(state = 'funny', action) {
  return state;
}

const searchBar = combineReducers({
  searchInputActive,
  searchTerm
});

export default searchBar;
