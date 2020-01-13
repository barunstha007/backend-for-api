exports.userAuth = (req, res, next) => {
    console.log(req.user);
    if (!req.user) {
        let err = new Error('You are not authenticated!');
        err.status = 403;
        return next(err);
    } else {
        next();
    }
}

module.exports.adminAuth = (req, res, next) => {
    if (req.user.admin === true) {
        next()

    } else {
        let err = new Error("Are you sure that you are an admin?")
        err.status = 403
        return next(err)
    }
}