const caller = require('./get-request.js');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var p1 = new Promise((resolve, reject) => {
    caller(url1, (err, data) => {
        if (err) {
            reject(err);
        }
    
        resolve(data);
    });
});

var p2 = new Promise((resolve, reject) => {
    caller(url2, (err, data) => {
        if (err) {
            reject(err);
        }
    
        resolve(data);
    });
});

var p3 = new Promise((resolve, reject) => {
    caller(url3, (err, data) => {
        if (err) {
            reject(err);
        }
    
        resolve(data);
    });
});

Promise.all([p1, p2, p3]).then(values => {
    values.forEach(value => {
        console.log(value);
    });
}).catch((err) => {
    console.error(err);
});