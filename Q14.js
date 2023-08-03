// How to find factor of given Integer in JavaScript
const num = 16;

console.log(`factorial of given Number ${num} is `)
for (let i = 0; i <= num; i++) {
    if(num%i==0){
        console.log(i);
    }
    
}

