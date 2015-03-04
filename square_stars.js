function square_stars (n, m) {
	// body...

	var result_string = [];

	for (var i = 0; i < n; i++) {
		for (var j = 0; j < m; j++) {
			if(i===0 || i===3 || j===0 || j===3)
				//process.stdout.write('*');
				result_string.push('*');
			else
				//process.stdout.write(' ');
				result_string.push(' ');

		};
		console.log('');
	};
}

square_stars(4, 4);