"use strict";

const d = {
	left: {
		left: {
			left: 1,
			right: {
				left: 0,
				right: 1,
			},
		},
		right: {
			left: 0,
			right: 1,
		},
	},
	right: 1,
};

foo(d);
console.log(d);

function foo(obj) {
	for (let key in obj) {
		if (obj[key] === 0) {
			obj[key] = 1;
		} else if (obj[key] === 1) {
			obj[key] = 0;
		} else if (typeof obj[key] === "object") {
			foo(obj[key]);
		}
	}
}

// {
// 	left: {
// 		left: {
// 			left: 0,
// 			right: {
// 				left: 1,
// 				right: 0,
// 			},
// 		},
// 		right: {
// 			left: 1,
// 			right: 0,
// 		},
// 	},
// 	right: 0,
// };
