// PostContent.js
// PostList.js
import React from 'react'
import PropTypes from 'prop-types'

const PostContent = ({ postdata }) => {
    return (
        <div>
            <h1>{postdata.id}</h1>
        </div>
    );
};

PostContent.propTypes = {
    postdata: PropTypes.arrayOf( PropTypes.shape({
        id: PropTypes.string,
        history: PropTypes.arrayOf(PropTypes.shape({
            subject: PropTypes.string,
            content: PropTypes.string
        })),
        t: PropTypes.number,
        children: PropTypes.arrayOf(PropTypes.shape({
            history: PropTypes.arrayOf(PropTypes.shape({
                subject: PropTypes.string,
                content: PropTypes.string
            })),
            type: PropTypes.string,
        })),
    }))
};

PostContent.defaultProps = {
    postdata: []
};

export default PostContent;