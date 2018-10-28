// PostBox.js
import React, { Component } from 'react'
import PostList from './PostList'
import PostForm from './PostForm'
import DATA from './data'
import { Container, Row, Col } from 'reactstrap'
import './PostBox.css'

class PostBox extends Component {
    constructor() {
        super();
        this.state = { data: []};
    }
    render() {
        return (
            <Container fluid='true'>
                <Row className='postheader'>
                    <Col                    
                    xl={{size: 10, offset: 1}} 
                    md={{size: 12, offset: 0}}
                    >
                        <h2>Posts:</h2>
                    </Col>
                </Row>
                <Row className='posts'>
                    <PostList data={DATA} />
                </Row>
                <Row className='form'>
                    <Col 
                    xl={{size: 10, offset: 1}} 
                    md={{size: 12, offset: 0}}
                    >
                        <PostForm />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PostBox;