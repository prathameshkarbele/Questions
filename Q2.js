//  Q.2) how to find max and min value of given array 

  const arrNumner = [12, 23, 32, 1,  2, 45, 76, 55];

  const maxValueFunc = (Array) => {
    return Array.reduce(function (pre, curr) {
      return pre > curr ? pre : curr
      
    });
  };

  // console.log(maxValueFunc(arrNumner));



// 2nd approach 



  // 2nd approach

  // function getSmall(arr){
  //   let small = Number.NEGATIVE_INFINITY;
  //   for (let i= 0; i < arr.length; i++) {
  //     if(arr[i] > small){
  //       small = arr[i];
  //     }
      
  //   }
  //   return small;
  // }

  // const data = getSmall(arrNumner);

  // console.log(data)

  // 3rd approch

// const getmin = (arr) =>{
//     return arr.reduce((prev, curr) => Math.min(prev, curr))
// }

// console.log(getmin(arrNumner));

