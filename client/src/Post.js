// Comment.js
import React from 'react';
import PropTypes from 'prop-types';

const Post = props => (
  <div className="postTitle">
    {props.subject}
    {props.id}
  </div>
);

Post.propTypes = {
    subject: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

Post.defaultProps = {
    subject: '',
    id: '',
}

export default Post;