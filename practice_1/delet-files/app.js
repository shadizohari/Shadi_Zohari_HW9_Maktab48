let fs = require('fs');

fs.unlink('text.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});