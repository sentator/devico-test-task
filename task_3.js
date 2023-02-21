"use strict";

console.log(bar(5));
// [
// 	[2, 1, 1, 1, 2],
// 	[0, 2, 1, 2, 0],
// 	[0, 0, 2, 0, 0],
// 	[0, 2, 1, 2, 0],
// 	[2, 1, 1, 1, 2],
// ];

console.log(bar(4));
// [
// 	[2, 1, 1, 2],
// 	[0, 2, 2, 0],
// 	[0, 2, 2, 0],
// 	[2, 1, 1, 2],
// ];

function bar(value) {
	const result = [];
	let firstDiagonalindex = 0;
	let secondDiagonalindex = 0;

	for (let i = 0; i < value; i++) {
		firstDiagonalindex = i;
		secondDiagonalindex = value - (i + 1);

		result[i] = [];

		for (let j = 0; j < value; j++) {
			if (j < firstDiagonalindex || j > secondDiagonalindex) {
				result[i][j] = 0;
			} else if (j === firstDiagonalindex || j === secondDiagonalindex) {
				result[i][j] = 2;
			} else if (j > firstDiagonalindex && j < secondDiagonalindex) {
				result[i][j] = 1;
			}
		}

		if (firstDiagonalindex === secondDiagonalindex) break;
	}

	let firstHalfArray;
	let secondHalfArray;

	if (value % 2 === 0) {
		firstHalfArray = result.slice(0, value / 2);
		secondHalfArray = [...firstHalfArray].reverse();
	} else {
		firstHalfArray = result.slice(0, firstDiagonalindex + 1);
		secondHalfArray = [...firstHalfArray].reverse().slice(1);
	}

	return [...firstHalfArray, ...secondHalfArray];
}
