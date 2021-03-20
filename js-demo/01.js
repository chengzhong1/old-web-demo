const { Cursor } = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err, '数据库连接失败'));
//  创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
});
// 使用创造规则创造集合
// 1，集合名称
// 2，集合规则
const Course = mongoose.model('Course', courseSchema)
    // 创造文档
const course = new Course({
        name: 'node.ji基础',
        author: '黑马讲师',
        isPublished: true
    })
    // 把文档插入数据库
course.save()