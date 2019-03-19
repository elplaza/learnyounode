const http = require('http');
const fs = require('fs');

var port = process.argv[2];
var file = fs.createReadStream(process.argv[3]);

var server = http.createServer((req, res) => {
    file.pipe(res);
});

server.on('error', (err) => {
    console.error(err);
});

server.listen(Number(port));