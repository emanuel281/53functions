function sum_word_len (argument) {
	// body...
	var my_array = argument.split(' ');
	var sum_of_word_len = 0;

	for (var i = 0; i < my_array.length; i++) {
		sum_of_word_len += my_array[i].length;
	};

	return sum_of_word_len;
}