// how to converts Cel to Ferh and ferh to Cel

// celcious to ferheight
// freh = cel*1.8 + 32;
var input = 42;

var freh = input * 1.8 + 32
freh= freh.toFixed(2)
console.log(freh);



// ferheight to  celcious
// cel = 5/9 * (ferh -32);

var cel = 5/9 * (input-32);
console.log(cel)

