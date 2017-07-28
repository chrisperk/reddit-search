import { combineReducers } from 'redux';
import { searchBar } from './searchBar';
import { postList } from './postList';

const index = combineReducers({
  searchBar,
  postList
});

export default twitchmore;
