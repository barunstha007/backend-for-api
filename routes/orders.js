var express = require('express');
var Orders = require('../models/orders');


var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        Orders.find({})
            .populate('User')
            .populate('carts')
            .then((orders) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(orders);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        req.body.User = req.user.id;
        Orders.create(req.body)
            .then((order) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(order);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

router.route('/:id')
    .delete((req, res, next) => {
        Orders.findByIdAndDelete(req.params.id)
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = router;