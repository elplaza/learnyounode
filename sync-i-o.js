var fs = require('fs');
var fileContentBuffer = fs.readFileSync(process.argv[2]);
var fileContentString = fileContentBuffer.toString();
var rows = fileContentString.split('\n');
console.log(rows.length - 1);