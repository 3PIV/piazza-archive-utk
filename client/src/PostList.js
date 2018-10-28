// PostList.js
import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post';

const PostList = (props) => {
    const postNodes = props.data.map(post => (
        <Post subject={post.subject} id={post.id}>
            {post.content}
        </Post>
    ));
    return (
        <div>
            { postNodes }
        </div>
    );
};

PostList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        subject: PropTypes.string,
        id: PropTypes.string,
        content: PropTypes.string
    })),
};

PostList.defaultProps = {
    data: [],
};

export default PostList;