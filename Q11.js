// How to find Palindrome Number in JavaScript

// var string = "madam";

// string = string.toLocaleLowerCase();

// const findPalindrome = (str) =>{
//    var revesreStr = str.split("").reverse().join("");
   

//    if(revesreStr === str){
//     //  console.log(`${str} is Palindrome`)
//     return true;
     
//    }
//    else{
//     // console.log(`${str} is not Palindrome`)
//     return false;
//    }

// }

// console.log(findPalindrome(string));


var string = "MaDAm";

string = string.toLocaleLowerCase();

const Palindrome = (str) =>{
   var reverseStr = str.split("").reverse().join("");

   if(reverseStr== string){
      return true
   }
   else{
      return false;
   }
}
console.log(Palindrome(string))