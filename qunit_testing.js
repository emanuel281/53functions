QUnit.test("testing hello() funtion", function(assert){

	assert.equal(hello(), "hello world", "We expect the value to be 'hello world'");
});

QUnit.test("testing hello_uppercase() funtion", function(assert){

	assert.equal(hello_uppercase("emanuel"), "Hello, EMANUEL!", "We expect the value to be 'Hello, EMANUEL'");
});


QUnit.test("testing hello_joe() funtion", function(assert){

	assert.equal(hello_joe("joe"), "Hello!", "We expect the value to be 'Hello!'");
	assert.equal(hello_joe("bob"), "Hello!", "We expect the value to be 'Hello!'");
	assert.equal(hello_joe("emanuel"), "Hello, emanuel!", "We expect the value to be 'Hello, emanuel!'");

});

QUnit.test("testing number_list() funtion", function(assert){

	var result = number_list(10);

	for(var i = 0; i < 10; i++){
		var j=i+1;
		assert.equal(result[i], i+1, "We expect the value to be '"+j+"'");
	}
});

QUnit.test("testing sum_numbers() funtion", function(assert){

	assert.equal(sum_numbers(10), 55, "We expect the value to be '55'");
});

QUnit.test("testing length() funtion", function(assert){

	assert.equal(length("emanuel"), 7, "We expect the value to be '7'");
});

QUnit.test("testing upper() funtion", function(assert){

	assert.equal(upper("emanuel"), "EMANUEL", "We expect the value to be 'EMANUEL'");
});

QUnit.test("testing reverse() funtion", function(assert){

	var result = reverse("emanuel");
	var expect = "leuname";

	for(var i = 0; i < "emanuel".length; i++)
		assert.equal(result[i], expect[i], "We expect the value to be '"+ expect[i] + "'");
});

QUnit.test("testing hello_list() funtion", function(assert){

	var result = hello_list(20);
	var expect = "hello world";

	for(var i = 0; i < 20; i++)
		assert.equal(result[i], expect, "We expect the value to be '"+ expect + "'");
});

QUnit.test("testing high_low() funtion", function(assert){

	var given_list = [1,2,3,4,5,6,7,8,9,10];
	var result = high_low(given_list);
	var expect = [10, 1];

	for(var i = 0; i < 2; i++)
		assert.equal(result[i], expect[i], "We expect the value to be '"+ expect[i] + "'");
});

QUnit.test("testing count_words() funtion", function(assert){

		assert.equal(count_words("Princess of China"), 3, "We expect the value to be '"+ 3 + "'");
});

QUnit.test("testing count_word_len() funtion", function(assert){

	var expect = 15;

	assert.equal(sum_word_len("Princess of China"), expect, "We expect the value to be '"+ expect + "'");
});

QUnit.test("testing count_words() funtion", function(assert){

		assert.equal(count_words("Princess of China"), 3, "We expect the value to be '"+ 3 + "'");
});

QUnit.test("testing longest_word() funtion", function(assert){

	var result = longest_word("She is the Princess of China");
	var expect = ["Princess", 8];

	for (var i = 0; i < 2; i++) {
		assert.equal(result[i], expect[i], "We expect the value to be '"+ expect[i] + "'");
	}
});

QUnit.test("testing word_length() funtion", function(assert){

	var result = word_length("She is the Princess of China");
	var expect = [3, 3];

	for (var i = 0; i < 2; i++) {
		assert.equal(result[i], expect[i], "We expect the value to be '"+ expect[i] + "'");
	}
});

QUnit.test("testing avg() funtion", function(assert){

	var result = avg("She is the Princess of China");
	var expect = 3;

		assert.equal(result, expect, "We expect the value to be '"+ expect + "'");
});

QUnit.test("testing start() funtion", function(assert){

	var result = start("All I want to know is how far you want to go because I am going back down south now.");
	var expect = "I";
	
	assert.equal(result, expect, "We expect the value to be '"+ expect + "'");
});

QUnit.test("testing ends() funtion", function(assert){

	var expect = "O";
	var result = ends("All I want to know is how far you want to go because I am going back down south now.");

	assert.equal(result, expect, "We expect the value to be '" + expect + "'");
});

QUnit.test("testing occurs_most() funtion", function(assert){

	var expect = "O";
	var result = occurs_most("All I want to know is how far you want to go because I am going back down south now.");

	assert.equal(result, expect, "We expect the value to be '" + expect + "'");
});

QUnit.test("testing occurs_least() funtion", function(assert){

	var expect = "D";
	var result = occurs_least("All I want to know is how far you want to go because I am going back down south now.");

	assert.equal(result, expect, "We expect the value to be '" + expect + "'");
});

QUnit.test("testing uppercase_letters() funtion", function(assert){

	var expect = "AII";
	var result = uppercase_letters("All I want to know is how far you want to go because I am going back down south now.");

	for(var i = 0; i < expect.length; i++)
		assert.equal(result[i], expect[i], "We expect the value to be '" + expect[i] + "'");
});

QUnit.test("testing lowercase_letters() funtion", function(assert){

	var expect = "eboso";
	var result = lowercase_letters("Ke boso");

	for(var i = 0; i < expect.length; i++)
		assert.equal(result[i], expect[i], "We expect the value to be '" + expect[i] + "'");
});