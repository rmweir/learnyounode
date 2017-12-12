
var fs = require('fs');
var stream;
var size;
var ext = process.argv[3];
function transform(x) {
        if(x.indexOf("." + ext) > -1)
		return x;
	else
		return "";
}
var buf = fs.readdir(process.argv[2], function(err, list) {if (err)
        console.log(err);


  list.filter(x => x.indexOf("." + ext) > -1).map(x => console.log(x));});
