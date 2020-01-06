var express = require('express');
var Blogs = require('../models/blog');


var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        Blogs.find({})
            .then((blogs) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(blogs);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Blogs.create(req.body)
            .then((blog) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(blog);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Blogs.deleteMany({})
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });


module.exports = router;