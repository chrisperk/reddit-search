import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostList.css';

const PostList = props => {
  return (
    <div className="list-wrapper">
      <main>
        <ul>
          {props.posts.map(post => {
            return (
              <li key={post.data.id}>
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
  posts: PropTypes.array
};
