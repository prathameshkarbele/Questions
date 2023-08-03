// How to find Vowels from string in javaScript
// (a, e, i, o, u)  The alphabet is made up of 26 letters, 5 of which are vowels (a, e, i, o, u) and the rest of which are consonants. A vowel is a sound that is made by allowing breath to flow out of the mouth, without closing any part of the mouth or throat.

// let string = 'g';

// string = string.toLocaleLowerCase();

// if(string== 'a' || string== 'e' || string== 'i' || string== 'o' || string== 'u'){
//     console.log(`${string} is vowels`)
// }
// else{
//     console.log(`${string} is not  vowels`)
// }

// we can also find vowels in string 
// var string = "prAthAmEsh";
// var vowel = ['a', 'e', 'i', 'o', 'u'];

// var countStringVowel = (str) =>{
//     var count =0;
//     for(let letter of str.toLowerCase()){
//         if(vowel.includes(letter)){
//             count++;
//         }
//     }
//     return count;
    
// }

// console.log(countStringVowel(string))

// how to find vowels in javaScript 

// vowels is basically latter a, e,i,o,u



var string = "Prathameih";

var vowels = ['a', 'e', 'i', 'o', 'u'];



const checkVowels = (str)=>{
    var count =0
    for(let letter of str.toLowerCase()){
        if(vowels.includes(letter)){
            count++;
        }
    }
    return count

}

console.log(checkVowels(string))
