// find fibonacci sequence in javaSCript

var a = 0;
var b = 1

for (let i = 0; i <=15; i++) {
    var temp = a+b; // 1, 2
    a = b; // 1 ,1
    b = temp; // 1 , 2
    console.log(temp);
    
}

