const Order = require('../models/orders');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/testbarun';

beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});

afterAll(async () => {

    await mongoose.connection.close();
});

describe('Order Schema', () => {
    it('Should be able create an order', () => {
        let order = {
            'carts': '5d234bae613200144ccbb374',
            'User': '5d234b90a63fe80a543321c4'
        };

        return Order.create(order)
            .then((fn) => {
                expect(fn.carts).toEqual('5d234bae613200144ccbb374');
            });
    });
    it('should be able to update order', async () => {
        const order = await Order.findOne({ 'carts': '5d234bae613200144ccbb374' });

        order.carts = "5d234b90a63fe80a543321c4";
        let updatedOrder = await order.save();
        expect(updatedOrder.carts).toBe("5d234b90a63fe80a543321c4");
    });

    it('should be able to remove all order', async () => {
        const status = await Order.deleteMany();
        expect(status.ok).toBe(1);
    });
})