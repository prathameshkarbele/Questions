// How to find missing Element in given arry

const arryElement = [10,3,6,8,4,5,2,1,9];



// 1st way to find missing value of element

// const missvalue = [];

// const findValue = (arr) =>{
//   let maxvalue = Math.max(...arr);
//   let minvalue = Math.min(...arr);

//   for(let i=minvalue;i<maxvalue;i++){
//     if(arr.indexOf(i)<0){
//         missvalue.push(i);
//     }
//   }
//   return missvalue;

// }
// console.log(findValue(arryElement))

const missValue = (arr)=>{
    var minValue = Math.min(...arr)
    var maxValue = Math.max(...arr)
    var missingarr = []

    for (let i = minValue; i <maxValue; i++) {
        if(arr.indexOf(i)<0){
            missingarr.push(i);
        }
        
    }
    return missingarr;
}
console.log(missValue(arryElement))

// 2nd way to find missing value if one missing value is possible 

// let total = ((arryElement.length+1) * (arryElement.length+2))/2;
// console.log(total);

// for (let i = 0; i < arryElement.length; i++) {
//    total = total - arryElement[i];
    
// }
// console.log(total)



