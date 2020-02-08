const User = require('../models/users');
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

describe('user Schema', () => {
    it('Should be able create a user', () => {
        let user = {
            'First_name': 'barun',
            'Last_name': 'shrestha',
            'Address': 'nayabazar',
            'Phone_number': '9843681668',
            'image': '',
            'username': 'barun',
            'password': 'barun',
            'admin': true

        };

        return User.create(user)
            .then((fn) => {
                expect(fn.First_name).toEqual('barun');
            });
    });
    it('should be able to update user', async () => {
        const user = await User.findOne({ 'First_name': 'barun' });

        user.First_name = "Mellow";
        let updatedUser = await user.save();
        expect(updatedUser.First_name).toBe("Mellow");
    });

    it('should be able to remove all users', async () => {
        const status = await User.deleteMany();
        expect(status.ok).toBe(1);
    });
})