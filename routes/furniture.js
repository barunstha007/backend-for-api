var express = require('express');
var Furniture = require('../models/furniture');
var verify = require('../verify');

var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        Furniture.find({})
            .then((furniture) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(furniture);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Furniture.create(req.body)
            .then((Furnitures) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(Furnitures);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403; ~
            res.end('PUT operation not supported!');
    })
    .delete((req, res, next) => {
        Furniture.deleteMany({})
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

router.route('/:id')
    .get((req, res, next) => {
        Furniture.findById(req.params.id)
            .then((Furnitures) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(Furnitures);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported!");
    })
    .put((req, res, next) => {
        Furniture.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, useFindAndModify: false })
            .then((Furnitures) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(Furnitures);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Furniture.findByIdAndDelete(req.params.id)
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });


module.exports = router;