var net = require('net');

var port = process.argv[2];

function nowString () {
    var date = new Date();

    var year = String(date.getFullYear());
    var month = String(date.getMonth() + 1);
    var day = String(date.getDate());
    var hour = String(date.getHours());
    var minutes = String(date.getMinutes());

    return year.padStart(4, '0')
        + '-'
        + month.padStart(2, '0')
        + '-'
        + day.padStart(2, '0')
        + ' '
        + hour.padStart(2, '0')
        + ':'
        + minutes.padStart(2, '0')
        + '\n'
    ;
}

var server = net.createServer((socket) => {
    socket.write(nowString());
    socket.end();
});

server.on('error', (err) => {
    console.error(err);
});

server.listen(port);