const http = require('http');

var url = process.argv[2];
http.get(url, (res) => {
    res.setEncoding('utf8');

    var body = '';

    res.on('data', (chunk) => {
        body += chunk;
    });

    res.on('end', () => {
        console.log(body.length);
        console.log(body);
    });

    res.on('error', console.error);
}).on('error', console.error);