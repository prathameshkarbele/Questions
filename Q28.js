var string = "Prathamesh";
var str1 = "";
var str2 = "";

for (let i = 0; i < string.length; i++) {
    
   if(i%2==0){
    str1 += string[i];
   }
   else{
    str2 += string[i]
   }
    
}

console.log(str1)
console.log(str2)
