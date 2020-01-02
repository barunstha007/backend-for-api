var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var furnitureSchema = new Schema({
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
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

var Furniture = mongoose.model('furniture', furnitureSchema);
module.exports = Furniture;

