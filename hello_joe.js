function hello_joe (user) {
	// body...
	if (user === "Joe" || user === "Bob") {
		return "Hello!"
	} else{
		var greeting = "Hello, " + user + "!";
		return greeting;
	};
}