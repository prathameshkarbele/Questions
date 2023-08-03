// how to Merge two array and sort them in javaScript 

var arr1 = [2,3,86];
var arr2 = [100,90,6]

// concat method 
 var MergeArr = arr1.concat(arr2);
//  console.log(MergeArr)

 var sortedArr = MergeArr.sort(function(a,b){
    return a-b
 })



 console.log(sortedArr);


 // 2 spread operator

//  var Merge = [...arr1, ...arr2]
//  console.log(Merge);

//  sortedMergeArr = Merge.sort(function(a,b){
//     return a-b;
//  })

//  console.log(sortedMergeArr)

