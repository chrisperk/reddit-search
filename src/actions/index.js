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

export const GET_SEARCHRESULTS_SUCCESS = 'GET_SEARCHRESULTS_SUCCESS';
export const GET_SEARCHRESULTS_ERROR = 'GET_SEARCHRESULTS_ERROR';
export const GET_SEARCHRESULTS_START = 'GET_SEARCHRESULTS_START';

export function getSearchResultsStart(subreddit) {
  return (dispatch) => {
    axios.get(`https://www.reddit.com/r/${subreddit}/.json`)
      .then(response => {
        console.log(response);
        console.log(response.data.data.children);
        dispatch(getSearchResultsSuccess(response.data.streams));
      })
      .catch(error => {
        dispatch(getSearchResultsError(error));
      });
    dispatch({
      type: GET_SEARCHRESULTS_START
    });
  };
}

export function getSearchResultsSuccess(results) {
  return {
    type: GET_SEARCHRESULTS_SUCCESS,
    results
  };
}

export function getSearchResultsError(message) {
  return {
    type: GET_SEARCHRESULTS_ERROR,
    message
  };
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
