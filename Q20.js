// How to convert first latter of string into uppaerCase  in javaScript

// const string = "this is javaScript which is for the best language";

// const firstLatterCap = (str)=>{
//   var strArr = str.split(" ");

//   strArr = strArr.map((ele)=>{
//     return ele.charAt(0).toUpperCase() + ele.slice(1)
//   })
//   return strArr.join(" ")
// }
// console.log(firstLatterCap(string))


const string = "this is more incredible question";

const upperCaseConvo = (str) =>{
 var sepString = str.split(" ");
//  console.log(sepString)
 sepString = sepString.map((ele)=>{
  return ele.charAt(0).toUpperCase() + ele.slice(1)
 })
 return sepString.join(" ")

}
console.log(upperCaseConvo(string))