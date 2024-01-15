// check number is prime or not 

var a = 11

if(a==1){
    console.log(`${a} is not prime or composite Number`)
}
else if(a<1){
    console.log(`${a} is not prime  Number`)
}else{
    for (let i = 2; i <a; i++) {
     if(a%i==0){
        var res = `${a} is not a prime number`
        break;
     }else{
        var res =`${a} is  a prime number`
     }
      
    }
    console.log(res)
}