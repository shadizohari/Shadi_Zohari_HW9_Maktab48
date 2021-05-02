let fs = require('fs');

fs.rename('text.txt', 'text-2.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});