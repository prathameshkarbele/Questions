// how to compare two array are equal or not 

// const arr1 = [2,4,5,6,7];
// const arr2 = [2,4,10,6,7];

// const isSame = arr1.length==arr2.length &&
//  arr1.every((currEle)=>{
//     if(arr2.indexOf(currEle)>-1){
//       return(currEle = [arr2.indexOf(currEle)])
//     }
   
//  }) 
// console.log(isSame)


const arr1 = [2,3,4,5,6]
const arr2 = [2,3,4,5,6]

const isSame = arr1.length == arr2.length && arr1.every((ele)=>{
  if(arr2.indexOf(ele)>-1){
    return ele = [arr2.indexOf(ele)]
  }
})
console.log(isSame);