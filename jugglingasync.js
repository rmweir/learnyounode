var http = require('http');
var concatstream = require('concat-stream');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

function callback(url, funct) {
	var print = "";
	http.get(url, (response) =>  {
		response.setEncoding('utf8');
		response.on("data", function(data) {
			print += data;
		});

		response.on("end", function() {
			console.log(print);
			funct(); 
		});

	});

}

// needed to tuck cb in a function here
callback(url1, function() {
	callback(url2, function() {
		 callback(url3, function() {});
	});
});
