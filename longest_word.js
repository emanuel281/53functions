function longest_word (argument) {
	// body...
	var broken = argument.split(' ');
	var longer = broken[0].length;
	var long_word = broken[0];

	for (var i = 0; i < broken.length; i++) {
		if(longer < broken[i].length){
			longer = broken[i].length;
			long_word = broken[i];
		}
	};

	var the_result = [long_word, longer];
	return the_result;
};