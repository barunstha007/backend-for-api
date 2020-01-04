var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let newsSchema = new Schema({

    topic: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
},

    {

        timestamps: true
    });


var News = mongoose.model('news', newsSchema);
module.exports = News;