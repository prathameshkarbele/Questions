// How to find armStrong Number

// var number = 31; // 3*3*3+ 7*7*7 + 1*1*1 = 27+1+343 = 371

// var temp = number;
// var lengthOfDigit = number.toLocaleString().length

// console.log(lengthOfDigit)

// var sum = 0

// while(temp>0){
//     var digit = temp%10;
//     // console.log(digit)
//     sum += digit**lengthOfDigit
//     // console.log("sum", sum)
//     temp = parseInt(temp/10)
//     // console.log(temp)
//     // console.log("-------")

// }

// if(sum== number){
//     console.log(`Given Number ${number} is armStrong Number `)
// }
// else{
//     console.log(`Given Number ${number} is not armStrong Number `)
// }


const number =  153;

// 1*1*1+5*5*5+3*3*3 =1+125+27 = 153

var temp = number;
var lengthNumber = number.toLocaleString().length;

var sum =0;

while(temp>0){
    var digit = temp%10;
    sum += digit**lengthNumber;
    temp =parseInt(temp/10);
    // console.log(sum)

}
if(sum==number){
    console.log("palindrome")
}
else{
    console.log("Not palindrome")
}
