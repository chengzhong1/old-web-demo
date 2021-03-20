// 搭建网站服务器，实现客户端与服务端通信
// 连接数据库，创建用户集合，向集合里插入文档
// 当用户访问list时，将所有用户信息查询出来
// 将用户信息和表格以html进行拼接响应回客户端
// 当用户访问add时，呈现表单页面，并实现添加用户信息功能
// 当用户访问modify时，呈现修改页面，并实现修改用户信息的功能
// 当用户访问delete时，实现用户删除功能
//准备网络通信
// const { Cursor } = require('mongodb');
const http = require('http');
const url = require('url');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'))
    // 创建服务器
    // let users = User.find();
    // console.log(users);
const app = http.createServer();
app.listen(3000);
// 创建集合规则
const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 20

        },
        age: {
            type: Number,
            min: 18,
            max: 80
        },
        password: String,
        email: String,
        hobbies: [String]
    })
    // 创建集合
const User = mongoose.model('User', userSchema);
// 为服务器对象添加请求事件
app.on('request', async(req, res) => {
    const method = req.method;
    const { pathname } = url.parse(req.url);
    if (method == 'GET') {
        if (pathname == '/list') {
            // 查询用户信息
            let users = await User.find();
            console.log(users);
            let list = `
            <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css ">
    <title>用户界面</title>
</head>

<body>
    <div class="container ">
        <h5>
            <a href="#" class="btn btn-primary">添加用户</a>
        </h5>

        <table class="table table-striped  table-bordered ">
            <tr>
                <td>用户名</td>
                <td>年龄</td>
                <td>爱好</td>
                <td>邮箱</td>
                <td>操作</td>
            </tr>
            `
            users.forEach(item => {
                list += `
                <tr>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>
                    <span>抽烟</span>
                    <span>喝酒</span>
                    <span>烫头</span>
                </td>
                <td>zhangsan@itcast.cn</td>
                <td>
                    <a href="#" class="btn btn-danger btn-xs">删除</a>
                    <a href="#" class="btn btn-success btn-xs">修改</a>
                </td>
            </tr>`;
            });
            list += `
            </tr>
        </table>
    </div>
</body>

</html>`;
            res.end(list);
        }
    } else if (method == 'POST') {

    }
    res.end('ok')
})