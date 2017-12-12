var http = require('http');
var concatstream = require('concat-stream');

var url = process.argv[2];

http.get(url, (response) => {
        response.setEncoding('utf8');

        response.pipe(concatstream((data) =>  {
		console.log(data.length);
		console.log(data);
	}));
}) 
