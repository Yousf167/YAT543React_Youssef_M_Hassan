function reverseNum(x) {
      let ans = ""
      while(x != 0){
            let digit = x % 10
            ans += digit
            x /= 10
            x = Math.floor(x)
      }
      return parseInt(ans)
}

let x = 123456
console.log(reverseNum(x));
