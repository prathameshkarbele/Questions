//Write a function to find the maximum number in an array.

const arr = [1,2,3,4,5,6];

const maxNum = (num) =>{
   if(num.length==0){
    return null;
   }
   let max = num[0];

   for (let i = 0; i < num.length; i++) {
    if(num[i]>max){
        max = arr[i]
    }
    
   }
   return max;
}
console.log(maxNum(arr))