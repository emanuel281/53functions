function diamond () {
	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 5*2; j++) {
			if((i === 0 && j > 0 && j < 4)) {
				process.stdout.write("* ");
			}
			else if(i > 0 && (i===j || j+i-2===6)){
				process.stdout.write("*");
			}
			else  if(i===0 &&j===0) {
				process.stdout.write("  ");
			}
			else{
				process.stdout.write(" ");
			}
		};
		console.log();
	};
}

diamond();