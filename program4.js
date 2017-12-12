var fs = require('fs');
var stream;
var size;
var buf = fs.readFile(process.argv[2], function(err, data) {if (err)
	console.log(err);
  
  
  console.log(data.toString().split('\n').length-1);});



