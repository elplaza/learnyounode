const http = require('http');

var url = process.argv[2];
http.get(url, (res) => {
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
        console.log(chunk);      
    });

    res.on('error', console.error);
}).on('error', console.error);