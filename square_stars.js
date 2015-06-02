function square_stars (n) {

	var result_string = [];

	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {
			if(i===0 || i===n-1 || j===0 || j===n-1)
				result_string.push('* ');
			else
				result_string.push('  ');

		};
		result_string.push('\n');
	};

	/*result_string.forEach(function(item){
		process.stdout.write(item);
	});*/

	return result_string;
}

square_stars(4);