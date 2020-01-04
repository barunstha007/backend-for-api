var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ordersSchema = new Schema({

    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: 'true'

    },
    carts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'carts',
        required: 'true'

    }
}, {
    timestamps: true
});

var Orders = mongoose.model('Orders', ordersSchema);
module.exports = Orders;