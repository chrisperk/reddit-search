import React from 'react';
import PropTypes from 'prop-types';
import './PostOverlay.css';
import mailLogo from '../Post/images/mail-logo.png';
import redditLogo from '../Post/images/reddit-logo.png';
import defaultThumbnail from '../Post/images/unknown.png';

const PostOverlay = props => {
  if (props.selectedPost) {
    return (
      <section
        id="post-overlay-wrapper"
        className={props.selectedPost ? 'show' : ''}
        onClick={event => props.handleUnselectPost(event)}
      >
        <div id="post-drag-container">
          <div className="image-cropper">
            <img
              src={
                props.selectedPost.data.thumbnail &&
                props.selectedPost.data.thumbnail !== 'self' &&
                props.selectedPost.data.thumbnail !== 'default' &&
                props.selectedPost.data.thumbnail !== 'nsfw' ?
                  props.selectedPost.data.thumbnail :
                  defaultThumbnail
              }
              alt="post image"
              height="90px"
            />
          </div>
          <h3 className="post-author">{props.selectedPost.data.author}</h3>
          <div className="post-title">{props.selectedPost.data.title}</div>
          <div id="post-info-wrapper">
            <div className="post-info">
              <div className="sprite-comments" />
              <span>{props.selectedPost.data.num_comments} comments</span>
            </div>
            <div className="post-info">
              <div className="sprite-ups" />
              <span>{props.selectedPost.data.ups} ups</span>
            </div>
          </div>
        </div>
        <div id="drag-instructions-container">
          Drag the card on the left to the desired action
        </div>
        <div id="drag-receivers-container">
          <div
            id="reddit-receiver"
            onClick={() => props.handleOpenPostInReddit(props.selectedPost)}
          >
            <img src={redditLogo} alt="Reddit" className="transparent" />
            <h3>Open on Reddit</h3>
          </div>
          <div 
            id="email-receiver"
            onClick={() => props.handleEmailPost(props.selectedPost)}
          >
            <img src={mailLogo} alt="e-mail" className="transparent" />
            <h3>Email to a friend</h3>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }

};

export default PostOverlay;

PostOverlay.propTypes = {
  selectedPost: PropTypes.object,
  handleUnselectPost: PropTypes.func,
  handleEmailPost: PropTypes.func,
  handleOpenPostInReddit: PropTypes.func
};
