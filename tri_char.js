function tri_char (ch) {

	var result_stri_charng = [];

	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if(i === 4-1 ||  j === 0 || i===j)
				process.stdout.write(ch);
			else
				process.stdout.write(' ');

		};
		process.stdout.write('\n');
	};
}

tri_char("a");