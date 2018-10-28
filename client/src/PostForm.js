// PostForm.js
import React from 'react'
import PropTypes from 'prop-types'

const PropForm = props => (
    <form onSubmit={props.submitComment}>
    <input
      type="text"
      name="author"
      placeholder="Your tags..."
      value={props.author}
      onChange={props.handleChangeText}
    />
    <input
      type="text"
      name="text"
      placeholder="Filter for..."
      value={props.text}
      onChange={props.handleTextChange}
    />
    <button type="submit">Submit</button>
  </form>
);

PropForm.propTypes = {
    submitComment: PropTypes.func.isRequired,
    handleChangeText: PropTypes.func.isRequired,
    text: PropTypes.string,
    author: PropTypes.string,
};

PropForm.defaultProps = {
    text: '',
    author: '',
};

export default PropForm;