import { combineReducers } from 'redux';
import searchBar from './searchBar';
import postList from './postList';

export default combineReducers({
  searchBar,
  postList
});
