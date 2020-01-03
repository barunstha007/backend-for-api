var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let blogsSchema = new Schema({

    topic: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    First_name: {
        type: String,
        default: ""
    }
},

    {

        timestamps: true
    });


var Blogs = mongoose.model('Blog', blogsSchema);
module.exports = Blogs;