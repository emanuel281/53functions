function number_list (number) {
	// body...
	var number_list = [];

	for (var i = 1; i <= number; i++){
		number_list[i-1] = i;
	}

	return number_list;

};