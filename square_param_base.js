function square_stars (character, n) {

	var result_string = [];

	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {
			if(i===0 || i===n-1 || j===0 || j===n-1)
				process.stdout.write(character);
			else
				process.stdout.write(' ');

		};
		process.stdout.write('\n');
	};
}

square_stars("z", 4);