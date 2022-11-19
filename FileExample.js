var fs = require('fs');
var data = 'Quick Learner Lina Liu';

fs.writeFile('newfile.txt', data, function(err) {
    if (err) throw err;
    console.log('File is created successfully.');
});

var data = 'Smart Learner Lina Liu'
fs.writeFile('newfile.txt', data, function(err) {
    if (err) throw err;
    console.log('data is written to file successfully.')
});

var data = 'Professional Learner Lina Liu'
fs.appendFile('newfile.txt', data, function(err) {
    if (err) throw err;
    console.log('saved!')
});

fs.readFile('newfile.txt', function(err, data) {
    if (err) throw err;
    console.log(data.toString('utf8'))

});

fs.unlink('newfile.txt', function(err) {
    if (err) throw err;
    console.log('file deleted!')
});