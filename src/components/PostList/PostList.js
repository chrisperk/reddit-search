import React from 'react';
import PropTypes from 'prop-types';

const PostList = props => {
  return (
    <ul>
      {props.posts.map(post => {
        return (
          <li key={post.data.id}>
            <span>{post.data.author}</span>
            <span>{post.data.title}</span>
            <span>{post.data.num_comments}</span>
            <span>{post.data.ups}</span>
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
