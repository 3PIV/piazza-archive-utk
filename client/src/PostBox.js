// PostBox.js
import React, { Component } from 'react'
import PostList from './PostList'
import PostForm from './PostForm'
import DATA from './data'
import './PostBox.css'

class PostBox extends Component {
    constructor() {
        super();
        this.state = { data: []};
    }
    render() {
        return (
            <div className='container'>
                <div className='form'>
                    <PostForm />
                </div>
                <div className='posts'>
                    <h2>Posts:</h2>
                    <PostList data={this.state.data} />
                </div>
            </div>
        );
    }
}

export default PostBox;