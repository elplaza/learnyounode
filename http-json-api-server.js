const http = require('http');
const url = require('url');

var port = process.argv[2];

const endpoint1 = '/api/parsetime';
const endpoint2 = '/api/unixtime';

var server = http.createServer((req, res) => {
    if (req.method == 'GET') {
        var info = url.parse(req.url, true);
        var iso = info.query.iso;
        if (iso) {
            var date = new Date(iso);
            var result = {};           
            if (info.pathname == endpoint1) {
                result.hour = date.getHours();
                result.minute = date.getMinutes();
                result.second = date.getSeconds();
            } else if (info.pathname == endpoint2) {
                result.unixtime = date.getTime();
            }
            
            if (result) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(result));    
            }
        }
    }

    res.writeHead(404);
    res.end();
});

server.on('error', (err) => {
    console.error(err);
});

server.listen(Number(port));