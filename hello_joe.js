function hello_joe (user) {
	// body...
	var username = user;

	if (username.toUpperCase() === "JOE" || username.toUpperCase() === "BOB") {
		return "Hello!"
	} else{
		var greeting = "Hello, " + user + "!";
		return greeting;
	};
}