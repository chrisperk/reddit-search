import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const Post = props => {
  return (
    <div className="post-wrapper">
      <div className="image-cropper">
        <img src={props.thumbnail} alt="post image" />
      </div>
      <div className="post-body">
        <h3 className="post-author">{props.author}</h3>
        <h3>{props.title}</h3>
        <div className="post-info">
          <span>{props.num_comments}</span>
        </div>
        <div className="post-info">
          <span>{props.ups}</span>
        </div>
        <div className="post-info">
          <span>{props.downs}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;

Post.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  num_comments: PropTypes.number,
  ups: PropTypes.number,
  downs: PropTypes.number,
  thumbnail: PropTypes.string
};
