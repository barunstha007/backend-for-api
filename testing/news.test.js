const News = require('../models/news');
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

describe('news Schema', () => {
    it('Should be able create news', () => {
        let news = {
            'topic': 'Hello',
            'description': 'mellow'

        };

        return News.create(news)
            .then((fn) => {
                expect(fn.topic).toEqual('Hello');
            });
    });
    it('should be able to update news', async () => {
        const news = await News.findOne({ 'topic': 'Hello' });

        news.topic = "world";
        let updatedNews = await news.save();
        expect(updatedNews.topic).toBe("world");
    });

    it('should be able to remove all news', async () => {
        const status = await News.deleteMany();
        expect(status.ok).toBe(1);
    });
})