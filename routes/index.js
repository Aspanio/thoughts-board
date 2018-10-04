const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

router.get('/', (req, res) => {
    Post.find({})
        .then(data => {
            console.log(data)
            res.render('index', {posts: data})
        })
        .catch(err => console.log(err))
});

module.exports = router;