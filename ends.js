function ends (argument) {
	// body...
	var broken = argument.toUpperCase().split(' ');
	var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var stats = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var letter = '';

	for (var i = 0; i < broken.length; i++) {
		for (var j = 0; j < 26; j++) {
			if(alphabets[j] === broken[i][broken[i].length-1]){
				stats[j] += 1;
			}
		};
	};

	var max = stats[0];

	for (var i = 0; i < stats.length; i++) {
		if(max < stats[i+1]){
			max = stats[i+1];
			letter = alphabets[i+1];
		}
	}

	return letter;
};