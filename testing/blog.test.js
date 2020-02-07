const Blog = require('../models/blog');
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

describe('Blog Schema', () => {
    it('Should be able create a blog', () => {
        let blog = {
            'topic': 'asd',
            'description': 'asd'
        };

        return Blog.create(blog)
            .then((fn) => {
                expect(fn.topic).toEqual('Hello');
            });
    });
    it('should be able to update blog', async () => {
        const blog = await Blog.findOne({ 'topic': 'Hello' });

        blog.topic = "Mellow";
        let updatedBlog = await blog.save();
        expect(updatedBlog.topic).toBe("Mellow");
    });

    it('should be able to remove all blogs', async () => {
        const status = await Blog.deleteMany();
        expect(status.ok).toBe(1);
    });
})