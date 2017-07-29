import axios from 'axios';

export const SELECT_SEARCHINPUT = 'SELECT_SEARCHINPUT';

export function selectSearchInput() {
  return {
    type: SELECT_SEARCHINPUT
  };
}

export const UNSELECT_SEARCHINPUT = 'UNSELECT_SEARCHINPUT';

export function unselectSearchInput() {
  return {
    type: UNSELECT_SEARCHINPUT
  };
}

export const CHANGE_SEARCHTERM = 'CHANGE_SEARCHTERM';

export function changeSearchTerm(searchTerm) {
  return {
    type: CHANGE_SEARCHTERM,
    searchTerm
  };
}

export function getSearchResultsStart() {

}

export function getSearchResultsSuccess() {

}

export function getSearchResultsError() {

}

export const SELECT_POST = 'SELECT_POST';

export function selectPost(post) {
  return {
    type: SELECT_POST,
    post
  };
}

export function openPostInReddit() {

}

export function emailPost() {

}
