// Comment.js
import React from 'react';
import PropTypes from 'prop-types';

const Post = props => (
  <div className="postTitle">
    {props.subject}
  </div>
);

Post.propTypes = {
    history: PropTypes.shape({
        subject: PropTypes.string.isRequired,
        content: PropTypes.string.isNotRequired,
    }),
    subject: PropTypes.string.isRequired,
};

export default Post;