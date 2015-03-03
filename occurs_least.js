function occurs_least (argument) {
	// body...
	var broken = argument.toUpperCase().split(' ');
	var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var stats = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var letter = '';

	for (var i = 0; i < broken.length; i++) {
		for (var j = 0; j < 26; j++) {
			for(var k = 0; k < 26; k++){
				if(alphabets[k] === broken[i][j]){
					stats[k] += 1;
				}
			}
		};
	};

	var max = stats[0];

	for (var i = 0; i < stats.length; i++) {
		if(max > stats[i+1] && stats[i+1]!=0){
			max = stats[i+1];
			letter = alphabets[i+1];
		}
	}
	return letter;
};