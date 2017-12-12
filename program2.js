var sum = 0;
process.argv.map(function(x) { if ( !(isNaN( x / 1))) 
	sum += parseInt(x);
	})

console.log(sum);
