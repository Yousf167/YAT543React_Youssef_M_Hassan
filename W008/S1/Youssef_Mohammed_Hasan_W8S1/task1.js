function isPalindrome(s) {
      for(let i = 0, j = s.length - 1; i < j; i++, j--){
            if(s[i] != s[j]) return false
      }
      return true
}

let s = "saippuakivikauppias"
console.log(isPalindrome(s));
