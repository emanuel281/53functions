function square_param_base (character, n) {

	var result_string = [];

	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {
			if(i===0 || i===n-1 || j===0 || j===n-1)
				result_string.push(character+" ");
			else
				result_string.push('  ');

		};
		result_string.push('\n');
	};

	return result_string;
}

// var printer = require("./print_array");

// printer.print_array(square_param_base("z", 4));