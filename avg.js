function avg (argument) {
	// body...
	var broken = argument.split(' ');
	var sum_of_word_len = 0;
	var avg_of_words = 0;

	for (var i = 0; i < broken[i].length; i++) {
		sum_of_word_len += broken[i].length;
	};

	avg_of_words = (sum_of_word_len)/(broken.length);

	var the_result = Math.round(avg_of_words);
	console.log(the_result);
	return Number(the_result);
}