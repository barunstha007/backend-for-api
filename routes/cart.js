var express = require('express');
var Carts = require('../models/cart');

var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        Carts.find({})
            .then((carts) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(carts);
            }, (err) => next(err))
            .catch((err) => next(err));
    }).post((req, res, next) => {
        req.body.User = req.user.id;
        Carts.create(req.body)
            .then((cart) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(cart);
            }, (err) => next(err))
            .catch((err) => next(err));
    }).delete((req, res, next) => {
        Carts.deleteMany({})
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

router.route('/findmycart')
    .get((req, res, next) => {
        Carts.find({ User: req.user.id })
            .then((cart) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(cart);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
router.route('/:id')
    .get((req, res, next) => {
        Carts.findById(req.params.id)
            .then((cart) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(cart);
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
        Carts.findByIdAndDelete(req.params.id)
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = router;