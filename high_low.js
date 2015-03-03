function high_low (argument) {
	// body...
	var min = argument[argument.length-1];
	var max = argument[0];

	for (var i = 0; i < argument.length; i++) {
		if (argument[i] < min) {
			min = argument[i];
		};
		if (argument[i] > max) {
			max = argument[i];
		};
	};

	var max_min = [max, min];
	return max_min;
}