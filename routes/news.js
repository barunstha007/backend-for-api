var express = require('express');
var News = require('../models/news');


var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        News.find({})
            .then((news) => {
                res.statusCode = 200;

                res.setHeader('Content-Type', 'application/json');
                res.json(news);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        News.create(req.body)
            .then((news) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(news);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        News.deleteMany({})
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

router.route('/:id')
    .get((req, res, next) => {
        News.findById(req.params.id)
            .then((news) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(news);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        News.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, useFindAndModify: false })
            .then((news) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(news);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        News.findByIdAndDelete(req.params.id)
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = router;