const lister = require('./list-files.js');

lister(process.argv[2], process.argv[3], (err, data) => {
    if (err) {
        return console.error(err);
    }

    data.forEach(file => {
        console.log(file.toString()); 
    });
});
