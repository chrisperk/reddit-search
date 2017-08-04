import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

const PostList = props => {
  return (
    <ul>
      {props.posts.map(post => {
        return (
          <li key={post.data.id}>
            <Post {...post.data} />
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;

PostList.propTypes = {
  posts: PropTypes.array
};
