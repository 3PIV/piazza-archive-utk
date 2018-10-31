// server.js
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets';
import Post from './models/post';

// create instances
const app = express();
const router = express.Router();

// set our port to either a predetermined port number if you have set it up, or 3001
const API_PORT = process.env.API_PORT || 3001;

mongoose.connect(getSecret('dbUri'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// now we can set the route path & initialize the API
router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

router.get('/posts', (req, res) => {
    Post.find({},{'history.subject': 1, 't': 1},(err, posts) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: posts });
    });
});

router.post('/posts', (req, res) => {
    Post.find({},{'history.subject': 1, 't': 1},(err, posts) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: posts });
    });
});

router.get('/posts/:postId', (req, res) => {
    console.log(req.params)
    const { postId } = req.params;
    if (!postId) return res.json({success: false, error: 'No post Id Provided'});
    Post.findById(postId,(err, post) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, post: post });
    });
});

router.get('/folders', (req, res) => {
    Post.find().distinct('folders',(err, folders) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, folderdata: folders });
    });
});

router.post('/folders', (req, res) => {
    Post.find().distinct('folders',(err, folders) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, folderdata: folders });
    });
});

router.get('/posts/:byFolder', (req, res) => {
    console.log(req.params);
    const { postFolder } = req.params;  
    Post.find({'folder': postFolder},{'history.subject': 1, 't': 1},(err, comments) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: comments });
    });
});

// Use our router configuration when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
