// How to find Prime Number in JavaScript

var number = 3;

if(number==1){
    console.log(`${number} is not Prime Number and nighter Composite Number`)
}
else if (number < 1){
    console.log(`${number} is not Prime Number`)
}
else{
    for (let i = 2; i <number; i++){
      if(number%2==0){
       var result = `${number} is Not Prime Number`
        break;
      }
      else{
        var result = `${number} is Prime Number`
      }        
       
    }
    console.log(result)
}




