"use strict";

let result = 0;
function calc(value, operator) {
	switch (operator) {
		case "+":
			result += value;
			break;
		case "-":
			result -= value;
			break;
		case "*":
			result *= value;
			break;
		case "/":
			result /= value;
			break;
		default:
			return console.log("Invalid operator. Expected one of +, -, * or /");
	}

	console.log(result);
}

calc(5, "+"); // 5
calc(2, "*"); // 10
calc(3, "-"); // 7
calc(2, "*"); // 14
calc(7, "/"); // 2
