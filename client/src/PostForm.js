// PostForm.js
import React from 'react'
import { Button, Input, Form, FormGroup, Label } from 'reactstrap'
import PropTypes from 'prop-types'



const PropForm = props => (
    <Form onSubmit={props.submitComment}>
        <FormGroup>
            <Input type="select" name="select" id="exampleSelect">
                <option>Lab 1</option>
                <option>Lab 2</option>
                <option>Lab 3</option>
                <option>Lab 4</option>
                <option>Lab 5</option>
            </Input>
        </FormGroup>
        <Input
        type="text"
        name="text"
        placeholder="Filter for..."
        value={props.text}
        onChange={props.handleTextChange}
        />
        <Button type="submit" color="primary">Submit</Button>
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