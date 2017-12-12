var fs = require('fs');
var buf = fs.readFileSync(process.argv[3]);
var size = buf.toString().split('\n').length - 1;
console.log(size);

