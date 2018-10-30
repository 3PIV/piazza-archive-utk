// Comment.js
import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Post = props => (
  <div className="singleComment">
    <div className="textContent">
      <div className="singleCommentContent">
        <h3>{props.subject}</h3>
        <ReactMarkdown source={props.content} />
      </div>
      <div className="singleCommentButtons">
      </div>
    </div>
  </div>
);

Post.propTypes = {
    history: PropTypes.shape({
        subject: PropTypes.number.isRequired,
    }),
    content: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
};

export default Post;