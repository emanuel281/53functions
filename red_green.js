function RedOrGreen (elementTag) {
	// body...

	var containerDiv = document.createElement("div");

	containerDiv.style.height = "150px";
	containerDiv.style.width = "400px";
	containerDiv.style.display = "inline-box";
	containerDiv.style.border = "none";
	document.getElementById('main-container').appendChild(containerDiv);

	var newElement = document.createElement(elementTag);

	this.makeGreen  = function() {
		// body...
		newElement.style.backgroundColor = "green";
		newElement.innerHTML = "Passed!";
	};

	this.makeRed = function() {
		// body...
		newElement.style.backgroundColor = "red";
		newElement.innerHTML = "Failed!";
	};
	
	containerDiv.appendChild(newElement);
};