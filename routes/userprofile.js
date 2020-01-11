var express = require('express');
var User = require('../models/users');
var passport = require('passport');

var router = express.Router();

router.get("/showProfile/:userid", (req, res, next) => {
    // console.log(req.user);
    User.findById(req.params.userid)
        .then(
            user => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(user);
            },
            err => next(err)
        )
        .catch(err => next(err));
});

router.put("/updateProfile", (req, res, next) => {
    User.findByIdAndUpdate(req.user.id,
        { $set: req.body },
        { new: true, userFindAndModify: false })
        .then(
            user => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(user);
            },
            err => next(err)
        )
        .catch(err => next(err));
});

module.exports = router;