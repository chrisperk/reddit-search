import { connect } from 'react-redux';
import PostList from '../components/PostList/PostList';
import {
  selectPost,
  unselectPost
} from '../actions/index';

const mapStateToProps = state => {
  return {
    searching: state.postList.searching,
    posts: state.postList.searchResults,
    searchError: state.postList.searchError,
    selectedPost: state.postList.selectedPost
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSelectPost: () => {
      dispatch(selectPost());
    },
    handleUnselectPost: () => {
      dispatch(unselectPost());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
