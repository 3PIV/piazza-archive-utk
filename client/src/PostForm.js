// PostForm.js
import React from 'react'
import { Button, Input, Form } from 'reactstrap'
import PropTypes from 'prop-types'

const PropForm = props => (
    <Form onSubmit={props.submitComment}>
    <Input
      type="text"
      name="author"
      placeholder="Your tags..."
      value={props.author}
      onChange={props.handleChangeText}
    />
    <Input
      type="text"
      name="text"
      placeholder="Filter for..."
      value={props.text}
      onChange={props.handleTextChange}
    />
    <Button type="submit">Submit</Button>
  </Form>
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