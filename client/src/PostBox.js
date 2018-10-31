// PostBox.js
import React, { Component } from 'react'
import PostList from './PostList'
import PostForm from './PostForm'
import { Container, Row, Col } from 'reactstrap'
import 'whatwg-fetch'
import './PostBox.css'

class PostBox extends Component {
    constructor() {
        super();
        this.state = {
          data: [],
          folderdata: [],
          error: null,
          folder: '',
          filter: '',
          postId: null,
        };
        this.pollInterval = null;
    }

    componentDidMount() {
        this.loadPostsFromServer();
        this.loadFoldersFromServer();
        if (!this.pollInterval) {
          //this.pollInterval = setInterval(this.loadPostsFromServer, 200000);
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

    loadFoldersFromServer = () => {
        // fetch returns a promise. If you are not familiar with promises, see
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
        fetch('/api/folders')
            .then(folderdata => 
                folderdata.json())
            .then((res) => {
                if (!res.success) this.setState({ error: res.error });
                else this.setState({ folderdata: res.folderdata });
        });
    }

    loadFilteredPosts = () => {
        // fetch returns a promise. If you are not familiar with promises, see
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
        fetch('/api/posts/?:folder&:filter')
            .then(data => 
                data.json())
            .then((res) => {
                if (!res.success) this.setState({ error: res.error });
                else this.setState({ data: res.data });
        });
    }

    loadPostsContentById = () => {
        // fetch returns a promise. If you are not familiar with promises, see
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
        fetch('/api/posts/${postId}')
            .then(data => 
                data.json())
            .then((res) => {
                if (!res.success) this.setState({ error: res.error });
                else this.setState({ data: res.data });
        });
    }

    render() {
        return (
            <Container className='mainContainer' fluid={true}>
                <Row className='form'>
                    <Col 
                    className='form'
                    md={{size: 9, offset: 2}} 
                    xs={{size: 11, offset: 1}}
                    >
                        <PostForm 
                            folderData={this.state.folderdata}
                            setFilters={this.loadFilteredPosts}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col  className='postheader'                  
                    md={{size: 10, offset: 1}} 
                    xs={{size: 12, offset: 0}}
                    >
                        <h2>Posts:</h2>
                    </Col>
                </Row>
                <Row className='postList'>
                    <Col    
                    className='posts'             
                    md={{size: 2, offset: 1}}    
                    xs={{size: 3, offset: 0}}
                    >
                        <PostList data={this.state.data} />
                    </Col>
                    <Col className='postContent'
                    md={{size: 8, offset: 0}}    
                    xs={{size: 9, offset: 0}}                 
                    >
                    <p>Lorem ipsum dolor sit amet, laoreet et velit massa est mi ut, lorem praesent. In in tincidunt taciti, etiam et cursus tempor aliquam facilisis iaculis. Sit ante ullamcorper nam fringilla, a nulla, porttitor volutpat porta pede sem, sit etiam, nostrum ut amet eu donec. Non vel nunc sit duis integer commodo, dui proin interdum quis ornare vulputate. Laoreet euismod sit porta cursus et ipsum, eu sagittis suspendisse praesent suspendisse, arcu vivamus id, ante integer vel orci. Vitae penatibus non pellentesque in, enim feugiat curabitur nihil hendrerit arcu duis, suspendisse aliquet nec et tincidunt porttitor lectus, felis torquent erat conubia porro auctor in. Pellentesque porta sit mauris, eget sit sodales curabitur rutrum ipsum, pede neque dui lacus nulla. Urna aliquam, dictumst tellus neque facilisis ligula quam, malesuada condimentum, massa varius et semper tellus sit ullamcorper. Lorem ornare etiam, sit justo ut fringilla magna vel, at in et mauris quam sociis et, tellus nulla ut. Tempus aliquet eget ac. Nibh scelerisque, ultricies maecenas ligula, reprehenderit vestibulum duis ornare diam praesent est, condimentum sed. Neque sit posuere suscipit id magna, quis sed, in diam, morbi pellentesque sed donec.

Vel nunc, est vel, vel sagittis proin ante, ac mauris felis felis egestas quam, libero maecenas. Condimentum tempus nisl ut. Ultricies nam ut arcu sed et sem. Interdum amet vestibulum, nam habitasse dignissim nec ornare in lacus, ut blandit ipsum vivamus, orci felis sed rutrum voluptas orci lacinia, velit wisi a accusamus. Sollicitudin duis nostra. Amet leo duis, iaculis neque dui sagittis. Justo sed massa. Ipsum sem lacus velit, et morbi quis in cum, malesuada in vel sit. Vestibulum vehicula sapien consequat aliquam netus.

Mauris molestie nullam et gravida, purus cum elementum phasellus sagittis. Vehicula eget ligula ut sem penatibus consequat, tempus ullamcorper, mattis nunc praesent, varius sit magnis, ut gravida neque. Dui lorem. Convallis in, ultrices consequat, sed quis facilisis nec quisque malesuada, per aliquam in. Illum dictum, sit cursus vitae tortor, nullam accumsan eros lectus, metus cras metus.

Pharetra placerat in habitasse, sapien lorem orci in ac dui ut, eu per nisl ante. Pellentesque congue. Non eu sit interdum, sit vitae. Mattis dignissim fermentum justo fermentum arcu duis. Amet convallis lorem ac mi vel nulla. Nascetur velit dolor magna nunc ante, nulla eget mollis tincidunt orci, ante blandit leo sed aenean donec amet. In ornare ac, imperdiet lobortis duis diam per, et est tristique vestibulum primis velit, semper posuere vitae est a laoreet morbi, dictumst egestas leo vitae. Integer in ut mauris dapibus dolorum, platea et elit congue eleifend sem, quis blandit, bibendum morbi feugiat praesent nibh sed morbi. Ultricies placerat sit, tincidunt quam fusce vestibulum at sed. Amet sed ultrices commodo. Eget eget turpis nulla, nullam at wisi lorem vel, amet vel dictum sem.</p>
                    </Col>
                </Row>
                <Row className='footer' fluid='true'>
                    <Col 
                    className='footerContent'
                    xs={{size: 10, offset: 1}} 
                    >
                        This is the footer.
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PostBox;