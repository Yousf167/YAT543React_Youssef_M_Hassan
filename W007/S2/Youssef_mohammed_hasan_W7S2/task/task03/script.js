function reverseStr(s) {
      let rev = ""
      for (let i = s.length - 1; i >= 0; i--) {
         rev += s[i]   
      }
      return rev
}

let s = "abcdefghi"
let rev = reverseStr(s)
console.log(rev)
