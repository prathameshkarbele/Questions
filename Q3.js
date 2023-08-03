//  how to find second or second smallest largest value in Array

let Myarr = [12, 23, 2, 43, 54];

Myarr.sort(function(a,b){
    return b-a;
})
// 1 WAY TO SOLVED THIS Q
console.log(Myarr)
console.log("arr in second smallest ", Myarr[Myarr.length-2])
console.log("second largest elememt in arr",Myarr[1])
