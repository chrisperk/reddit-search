import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostList.css';
import loader from '../Post/images/loader.gif';

const PostList = props => {
  return (
    <div className="list-wrapper">
      <main>
        <div className={props.searching ? 'loading-space show' : 'loading-space'}>
          <img src={loader} alt="loading spinner" />
        </div>
        <ul className={props.searching ? 'hide' : ''}>
          {props.posts.map(post => {
            return (
              <li
                key={post.data.id}
                onClick={() => props.handleSelectPost(post)}
              >
                <Post {...post.data} />
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default PostList;

PostList.propTypes = {
  posts: PropTypes.array,
  handleSelectPost: PropTypes.func,
  searching: PropTypes.bool
};
