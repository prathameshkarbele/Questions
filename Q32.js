// what is empty arr

var arr = [2,3,4,5,6];

var b = arr;

// var arr = [];

//  arr.length=0

// while(arr.length >0){
//     arr.pop();
// }

// arr.splice(0,arr.length)
// console.log(b)
// console.log(arr)

// reverse world in javascript
// var company = "this is man with experinace";
// var reverseString = [...company].reverse().join('');
// console.log(reverseString)


// var str = 'Hello';
// var newStr = str.length;
// var element = ''
// for (let i = newStr-1; i >=0; i--) {
//     element += str[i];
    
// }
// console.log(str)
// console.log(element)

var arr = [1,3, 5,2,4,8,19,7]


// arr.sort()
arr.sort((a,b)=>{
  return a-b
})
console.log(arr)