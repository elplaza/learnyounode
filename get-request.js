const http = require('http');

module.exports = function (url, callback) {
    http.get(url, (res) => {
        res.setEncoding('utf8');
    
        var body = '';
    
        res.on('data', (chunk) => {
            body += chunk;
        });
    
        res.on('end', () => {
            return callback(null, body);
        });
    
        res.on('error', callback);
    }).on('error', callback);
}

