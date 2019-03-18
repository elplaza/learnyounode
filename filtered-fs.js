const fs = require('fs');
const dir = process.argv[2];
const ext = process.argv[3];
fs.readdir(dir, (err, files) => {
    if (err) {
        return console.error(err);
    }
    
    files.forEach(file => {
        if (
            file.toString() != ext
            && file.split('.').pop() == ext
        ) {
            console.log(file.toString());
        }
    });
});