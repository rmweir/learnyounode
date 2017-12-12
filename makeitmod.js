var module = require('./module.js');

var path = process.argv[2];
var ext = process.argv[3];

module(path, ext, function(err, list) {
	if(err) 
		return console.log("err");
	
	list.forEach(x => console.log(x));		
});

