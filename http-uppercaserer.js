const http = require('http');

var port = process.argv[2];

var server = http.createServer((req, res) => {
    if (req.method == 'POST') {
        res.setHeader('Content-Type', 'application/json');

        req.on('data', (chunk) => {
            var value = String(chunk);
            res.write(value.toUpperCase());
        }).on('end', () => {
            res.end();
        });
    }
});

server.on('error', (err) => {
    console.error(err);
});

server.listen(Number(port));