function lowercase_letters (argument) {
	// body...
	var result_string = [];
	var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	for(var i = 0; i < argument.length; i++){
		for (var j = 0; j < 26; j++) {
			if (alphabets[j].toLowerCase() === argument[i]) {
				result_string.push(argument[i]);
			};
		};
	}

	return result_string;
}