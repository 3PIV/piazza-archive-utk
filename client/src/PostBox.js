// PostBox.js
import React, { Component } from 'react'
import PostList from './PostList'
import PostForm from './PostForm'
import DATA from './data'
import { Container, Row, Col } from 'reactstrap'
import 'whatwg-fetch'
import './PostBox.css'

class PostBox extends Component {
    constructor() {
        super();
        super();
        this.state = {
          data: [],
          error: null,
          author: '',
          text: ''
        };
        this.pollInterval = null;
    }

    componentDidMount() {
        this.loadPostsFromServer();
        if (!this.pollInterval) {
          this.pollInterval = setInterval(this.loadPostsFromServer, 200000);
        }
    }
    
    componentWillUnmount() {
        if (this.pollInterval) clearInterval(this.pollInterval);
        this.pollInterval = null;
    }
    
    loadPostsFromServer = () => {
        // fetch returns a promise. If you are not familiar with promises, see
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
        fetch('/api/posts')
            .then(data => 
                data.json())
            .then((res) => {
                if (!res.success) this.setState({ error: res.error });
                else this.setState({ data: res.data });
        });
    }

    render() {
        return (
            <Container fluid='true'>
                <Row className='form'>
                    <Col 
                    md={{size: 10, offset: 1}} 
                    sm={{size: 12, offset: 0}}
                    >
                        <PostForm />
                    </Col>
                </Row>
                <Row className='postheader'>
                    <Col                    
                    md={{size: 12, offset: 1}} 
                    sm={{size: 12, offset: 0}}
                    >
                        <h2>Posts:</h2>
                    </Col>
                </Row>
                <Row className='posts'>
                    <Col                 
                    md={{size: 2, offset: 1}}    
                    sm={{size: 2, offset: 0}}
                    >
                        <PostList data={this.state.data} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PostBox;