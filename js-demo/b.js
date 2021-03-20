const fs = require('fs');
fs.readFile('./a.js', 'utf-8', (err, doc) => {
    console.log(err);
    console.log(doc)
    if (err == null) {
        console.log(doc);
    }
})