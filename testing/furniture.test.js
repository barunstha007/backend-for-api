const Furniture = require('../models/furniture');
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

describe('Furniture Schema', () => {
    it('Should be able create a furniture', () => {
        let Furnitures = {
            'product_name': 'SOFA',
            'product_desc': 'it is a velvet chair which is ade of genuine velet',
            'quantity': '23',
            'price': '1455',
            'image': 'sofa1.jpg'
        };

        return Furniture.create(Furnitures)
            .then((fn) => {
                expect(fn.product_name).toEqual('SOFA');
            });
    });
    it('should be able to update Furnitures', async () => {
        const Furnitures = await Furniture.findOne({ 'product_name': 'SOFA' });

        Furnitures.product_name = "Oil";
        let updatedFurniture = await Furnitures.save();
        expect(updatedFurniture.product_name).toBe("Oil");
    });

    it('should be able to remove all furniture', async () => {
        const status = await Furniture.deleteMany();
        expect(status.ok).toBe(1);
    });
})