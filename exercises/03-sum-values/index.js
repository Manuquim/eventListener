// adding the function to the window makes it globally available
window.calculateSumListener = function() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	var numberA=parseInt(stringA);
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;
	var numberB=parseInt(stringB);
	//your code goes here
	var numberC=numberA+numberB;
	document.getElementById("resultNumber").value=numberC;
};
