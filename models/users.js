var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

let User = new Schema({
    First_name: {
        type: String,
        required: true
    },
    Last_name: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        default: ""
    },
    Phone_number: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: ""
    },
    admin: {
        type: Boolean,
        default: false
    }
}, {

    timestamps: true
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);