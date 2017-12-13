var net = require('net');
var socket = process.argv[2];
var server = net.createServer(function(socket) {
	var dat = new Date();
	socket.write(getFormattedDate());
	socket.end();	
})
server.listen(socket);

function getFormattedDate() {
	var date = new Date();
	return date.getFullYear() + "-" + formatNumber(date.getMonth() + 1) + "-"  + formatNumber(date.getDate()) 
		+ " " + formatNumber(date.getHours()) + ":" + formatNumber(date.getMinutes()) + "\n";

}

function formatNumber(number) {
	return (number < 10) ?  "" + 0 + number : number;

}
