function countVowels(s) {
      let count = {
            "a" : 0,
            "e" : 0,
            "i" : 0,
            "o" : 0,
            "u" : 0,
      }
      for(let char of s){
            if(["a", "e", "i", "o", "u"].includes(char)) count[char]++
      }
      return count
}

s = "aeiou"
console.log(countVowels(s));
