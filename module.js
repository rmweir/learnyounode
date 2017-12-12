fs = require('fs');
path = require('path');

module.exports = function(dir, ext, callback) {
		
	var buf = fs.readdir(dir, function(err, list) {if (err)
        	return callback(err, null);
		
		var filteredList = list.filter(x=> x.indexOf("." + ext) > 0);
 		callback(null, filteredList);
	});

}
