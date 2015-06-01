function tri () {

	var result_string = [];

	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if(i === 4-1 ||  j === 0 || i===j)
				process.stdout.write('*');
			else
				process.stdout.write(' ');

		};
		process.stdout.write('\n');
	};
}

tri();