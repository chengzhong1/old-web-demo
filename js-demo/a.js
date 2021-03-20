const fs = require("fs");
const path = require('path')
    // const content = 'vwucvucvjwhcbhwcjbs';
fs.readFile(path.join(__dirname, '.demo.txt'), 'utf8', (err, doc) => {
    console.log(err);
    console.log(doc);
})
console.log('文件被修了')