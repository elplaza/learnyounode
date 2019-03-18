var net = require('net');

var port = process.argv[2];

var server = net.createServer((socket) => {
    var date = new Date();

    var dateStr = date.getFullYear()
        + '-'
        + date.getMonth()
        + '-'
        + date.getDate()
        + ' '
        + date.getHours()
        + ':'
        + date.getMinutes()
    ;

    socket.write(dateStr);
    socket.end();
});

server.listen(port);