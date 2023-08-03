// Write a function to reverse a string.

const reverserStr = (str) =>{
  if(str==""){
    return ""
  }
  var reveser = ""
  for (let i = str.length-1; i>=0; i--) {
    reveser += str[i];
    
  }
  return reveser
}

console.log(reverserStr("Prathamesh"))
