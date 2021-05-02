
// Create Files
// Update Files


let fs = require('fs');

// update files: The fs.appendFile() method appends the specified content at the end of the specified file
// creat files: If the file does not exist, the file will be created
fs.appendFile('text-1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('append-file!');
});

// update files: The fs.writeFile() method replaces the specified file and content if it exists.
// creat files: If the file does not exist, a new file, containing the specified content, will be created:
fs.writeFile('text-3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('writeFile!');
});

// The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. 
// If the file does not exist, an empty file is created:
fs.open('text.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('open!');
});


