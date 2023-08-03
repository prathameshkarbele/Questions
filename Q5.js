// find ODD and EVEN Number?

const arr = [1,2, 3,4,5,6,7,8,9,10]

const even = arr.filter((item)=>{
   return item%2==0
})
const odd = arr.filter((item)=>{
   return item%2!==0
})
console.log("even number in given arr is", even);
console.log("Odd number in given arr is", odd);

