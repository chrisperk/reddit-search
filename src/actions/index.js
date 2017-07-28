import axios from 'axios';

export const CHANGE_SEARCHINPUTACTIVE = 'CHANGE_SEARCHINPUTACTIVE';

export function changeSearchInputActive() {
  return {
    type: CHANGE_SEARCHINPUTACTIVE
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
  }
}

export function openPostInReddit() {

}

export function emailPost() {
  
}
