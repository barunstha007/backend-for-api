var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');
var authenticate = require('./authenticate');
let {
    adminAuth,
    userAuth
} = require('./verify');
var cors = require('cors');

const url = 'mongodb://localhost:27017/Furnituresshopping';
const connect = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
});
connect.then((db) => {
    console.log("Connected to Database. Server running on port: 3000");
}, (err) => { console.log(err); });


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var furnitureRouter = require('./routes/furniture');
var userprofileRouter = require('./routes/userprofile');
var uploadRouter = require('./routes/upload');
var blogRouter = require('./routes/blogs');
var cartsRouter = require('./routes/cart');
var ordersRouter = require('./routes/orders');
var newsRouter = require('./routes/news');
var app = express();

app.use(logger('dev'));
app.use(express.json()); // same as bodyParser.json()
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    name: 'session-id',
    secret: 'mysessionkey',
    saveUninitialized: false,
    resave: false,
    store: new FileStore()
}));

app.use(passport.initialize());
app.use(passport.session());



app.use('*', cors({
    origin: "http://127.0.0.1:5500",
    credentials: true
}));

// app.use('*', cors());

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/furniture', furnitureRouter);
app.use('/news', newsRouter);
app.use('/blog', blogRouter);
app.use('/carts', cartsRouter);
app.use('/orders', ordersRouter);
app.use('/upload', uploadRouter);
app.use('/userprofile', userprofileRouter);
//this is for authentication
app.use(userAuth);


app.use(adminAuth);


module.exports = app;