import React from 'react';
import PropTypes from 'prop-types';

const Post = props => {
  return (
    <div>
      <span>{props.author}</span>
      <span>{props.title}</span>
      <span>{props.num_comments}</span>
      <span>{props.ups}</span>
      <span>{props.downs}</span>
    </div>
  );
};

export default Post;

Post.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  num_comments: PropTypes.number,
  ups: PropTypes.number,
  downs: PropTypes.number
};
