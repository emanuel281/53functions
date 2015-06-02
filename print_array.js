exports.print_array = function (arr) {
	arr.forEach(function(item){
		process.stdout.write(item);
	});
}