var passes = 0;
var fails = 0;
var newP = document.createElement("p");

var assert = {

	equals:function (expectedResult, returnedResult) {
		// body...
		var myDiv = new RedOrGreen("div");

		if (expectedResult === returnedResult) {
			myDiv.makeGreen();
			++passes;
		}
		else {

			myDiv.makeRed();
			++fails;
		}

		var stats = passes+fails;
		
		newP.innerHTML = "Passes: " + passes + " Fails: " + fails + " Total tests: " + stats;
	}
};

var TestMyCode = {

	run:function(nameOfTest, functionToExecute){
		var anotherP = document.createElement("p");
		anotherP.innerHTML = nameOfTest;
		functionToExecute(assert);
		document.getElementById('main-container').lastChild.appendChild(anotherP);

	}
};

document.body.appendChild(newP);
