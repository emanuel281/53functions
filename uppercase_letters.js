function uppercase_letters (argument) {
	// body...
	var result_string = [];

	for(var i = 0; i < argument.length; i++){
		var charCode = argument.charCodeAt(i);
			if (charCode >=65 && charCode<=90) {
				result_string.push(argument[i]);
			};
	}

	return result_string;
}

