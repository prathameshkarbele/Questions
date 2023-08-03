// How to find Intersection of two array/ set

var arr1 = [2,4,5,6,7,8,8];
var arr2 = [3,9,4,12,7, 9, 8];

var insectionArr = arr1.filter((ele)=>{
    return arr2.includes(ele)
})

// console.log([...new Set(insectionArr)])
console.log((insectionArr))

