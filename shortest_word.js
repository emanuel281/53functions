function shortest_word (argument) {
	// body...
	var broken = argument.split(' ');
	var shoter = broken[0].length;
	var short_word = broken[0];

	for (var i = 0; i < broken.length; i++) {
		if(shoter > broken[i].length){
			shoter = broken[i].length;
			short_word = broken[i];
		}
	};

	var the_result = [short_word, shoter];
	return the_result;
};