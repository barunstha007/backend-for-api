var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartsSchema = new Schema({
    product_name: {
        type: String,
        required: true
    },
    product_desc: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        default: ''
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: 'true'
    },
}, {
    timestamps: true
});

var Carts = mongoose.model('carts', cartsSchema);
module.exports = Carts;

