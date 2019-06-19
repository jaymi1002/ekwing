/*
* @Author: lifangfang
* @Date:   2019-03-19 14:41:09
* @Last Modified by:   lifangfang
* @Last Modified time: 2019-04-03 16:24:20
*/
function isEqual(obj1, obj2) {
	return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function contains(obj1, obj2) {
	return JSON.stringify(obj1).indexOf(JSON.stringify(obj2)) > -1;
}

function indexOf(arr, obj) {
	let i = -1;
	arr.forEach(function(el, index) {
		if (isEqual(el, obj)) {
			i = index;
		}
	});
	return i;
}

function deepCopy(obj){
	return JSON.parse(JSON.stringify(obj));
}

export {
	isEqual,
	contains,
	indexOf,
	deepCopy
}