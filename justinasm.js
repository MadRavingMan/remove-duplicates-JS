"use strict";

let inputArray = ['Tomas', 'Julius', 'Justas', 'Tomas', 'Mantas', 'Julius'];
Array.prototype.removeDuplicates = function() {
	let result = [];
	for (let i = 0; i < this.length; i++) {
		if (result.indexOf(this[i])<0) {
		result.push(this[i]);
		}
	}
	return result;
};
const resultArray = inputArray.removeDuplicates();
console.log(resultArray);
