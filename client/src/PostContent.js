// PostContent.js
// PostList.js
import React from 'react'
import PropTypes from 'prop-types'

const PostContent = ({ postdata }) => {
    return (
        <div>
            <h1><code>{postdata.history && postdata.history.length && postdata.history[0].content}</code></h1>
            {postdata.children && postdata.children.length && postdata.children.map((comment, i) => (
              <div key={i}>
                2nd level {(comment.type === "s_answer" || comment.type === "i_answer") ? (
                  <code>{comment.history && comment.history.length && comment.history[0].content}</code>
                ) : (
                  <code>{comment.subject}</code>
                )}
                {comment.children.length ? comment.children.map((reply, i) => (
                  <div key={i}>
                    3rd level {reply.type === "feedback" && (<code>{reply.subject}</code>)}
                  </div>
                )) : null}
              </div>
            ))}
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