const fs = require('fs');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            return callback(err);
        }
        
        var data = [];
        files.forEach(file => {
            if (
                file.toString() != ext
                && file.split('.').pop() == ext
            ) {
                data.push(file.toString());
            }
        });

        return callback(null, data);
    });
}