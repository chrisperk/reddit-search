import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import defaultThumbnail from './images/unknown.png';

const Post = props => {
  return (
    <div className="post-wrapper">
      <div className="image-cropper">
        <img
          src={
            props.thumbnail &&
            props.thumbnail !== 'self' &&
            props.thumbnail !== 'default' &&
            props.thumbnail !== 'nsfw' ?
              props.thumbnail :
              defaultThumbnail
          }
          alt="post image"
          height="90px"
        />
      </div>
      <div className="post-body">
        <h3 className="post-author">{props.author}</h3>
        <h3>{props.title}</h3>
        <div className="post-info">
          <div className="sprite-comments" />
          <span>{props.num_comments} comments</span>
        </div>
        <div className="post-info">
          <div className="sprite-ups" />
          <span>{props.ups} ups</span>
        </div>
        <div className="post-info">
          <div className="sprite-downs" />
          <span>{props.num_crossposts} crossposts</span>
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
  num_crossposts: PropTypes.number,
  thumbnail: PropTypes.string
};
