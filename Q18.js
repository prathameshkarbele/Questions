// How find union of two  arrays / set of array 

var arr1 = [2,3,4,5,6,7];
var arr2 = [6,7,8,9,5];

var unionarr = [...arr1, ...arr2];

console.log([...new Set(unionarr)]);
