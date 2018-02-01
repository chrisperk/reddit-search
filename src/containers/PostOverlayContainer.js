import { connect } from 'react-redux';
import PostOverlay from '../components/PostOverlay/PostOverlay';
import {
  unselectPost
} from '../actions/index';

const baseLink = 'https://www.reddit.com';

const mapStateToProps = state => {
  return {
    selectedPost: state.postList.selectedPost
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUnselectPost: event => {
      if (event.target !== document.getElementById('post-drag-container') &&
      event.target !== document.getElementById('reddit-receiver') &&
      event.target !== document.getElementById('email-receiver')) {
        dispatch(unselectPost());
      }
    },
    handleOpenPostInReddit: (event, post) => {
      console.log(event);
      event.preventDefault();
      window.open(baseLink + post.data.permalink);
    },
    handleEmailPost: post => {
      window.location.href = `mailto:dummy@test.com?subject=Check%20out%20this%20Reddit%20post!&body=${baseLink + post.data.permalink}`;
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostOverlay);
