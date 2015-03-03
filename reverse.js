function reverse (argument) {
	// body...
	var reversed = [];

	for(var i = 0, j = argument.length-1; i < argument.length; j--,i++)
		reversed[j] = argument[i];
		
		console.log(reversed);
	return reversed;
};

reverse("key");