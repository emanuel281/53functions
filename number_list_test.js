TestMyCode.run("Tesing number_list() funtion", function(assert){
	var result = number_list(10);
	var expected = [1,2,3,4,5,6,7,8,9,10];

	assert.equals(result, expected);
});
