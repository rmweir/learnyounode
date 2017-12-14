url = require('url');
http = require('http');

var server = http.createServer(function (request, response) {
	var urlobj = url.parse(request.url, true);
	var pathname = urlobj.pathname;
	var search = urlobj.search;
	var result = "";
	var datestring = urlobj.query.iso;
	var date = new Date(Date.parse(datestring));

	if (request.method === "GET") {
		
		var hour = parseInt(search.slice(15, 17), 10);
                var minute = parseInt(search.slice(18, 20), 10);
                var second = parseFloat(search.slice(21, search.indexOf("Z")))
		
		if (pathname === "/api/parsetime") {
			var jsonobj = { "hour": date.getHours(), "minute": date.getMinutes(), "second": date.getSeconds() };
			result = JSON.stringify(jsonobj);  	
		}
		else if (pathname == "/api/unixtime") {
			
			var jsonobj = { "unixtime" : date.getTime() };  
			result = JSON.stringify(jsonobj);
		}
	}
	response.end(result);
});
server.listen(process.argv[2]);
