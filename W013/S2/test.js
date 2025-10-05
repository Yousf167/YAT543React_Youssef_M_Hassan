function reverseStr(s){
      let rev = ''
      for(let i = s.length - 1; i > -1; i--){
            rev += s[i]
      }
      return rev
}
function reverseWordWhenFind(letter, str){
      let splitStr = str.split(" ")
      for(let i = 0; i < splitStr.length; i++){
            if(splitStr[i][0].toLowerCase() == letter.toLowerCase()){
                  splitStr[i] = reverseStr(splitStr[i])
            }
      }
      return splitStr.join(' ')
}

let s = "peter piper picked pickled peppers"
// console.log(reverseStr(s));


console.log(reverseWordWhenFind('P', s));
