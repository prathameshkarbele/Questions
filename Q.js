// check value palindrome or not
var value = "madam"
const revValue = () =>{
 var str =    value.toString().split('').reverse().join('');
 var prevstr = value.toString()

 if(prevstr == str){
    console.log("value is aplindrome")
 }
 else{
    console.log("value is not  aplindrome")
 }
//  console.log(str);
}
revValue()