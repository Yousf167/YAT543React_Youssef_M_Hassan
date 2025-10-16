// 1
function length(str, i = 0) {
      if (!str[i]) return 0
      return 1 + length(str, i + 1)
}

let s1 = 'abcdefg'
let s2 = ''
let s3 = '12345'
console.log(length(s1), length(s2), length(s3));


// 2
function table(n) {
      if (n > 12) throw new Error("Maximum input is 12. Given: " + n);
      for (let i = 1; i <= 12; i++) {
            console.log(`${n} x ${i} = ${n * i}`);
      }
}

table(4)
table(3)
table(12)


// 3
function getOddPos(arr) {
      return arr.filter((num, idx) => idx % 2)
}
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(getOddPos(arr));


// 4
function isPrime(n) {
      for (let i = 2; i * i <= n; i++) {
            if (n % i == 0) return false
      }
      return true
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(163));
console.log(isPrime(170));
console.log(isPrime(13));


// 6
function countVowels(s) {
      let vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 }
      for (let letter of s) {
            let vowelArr = Object.keys(vowels)
            if (vowelArr.includes(letter)) vowels[letter]++
      }
      let sum = 0
      for (let letter in vowels) {
            sum += vowels[letter]
      }
      return sum
}

let s = 'aeiou'
console.log(countVowels(s));


// 9
class MyObject {
      constructor(name, message) {
            this._name = name.toString()
            this._message = message.toString()
      }
      get name() {
            return this._name
      }
      set name(n) {
            this._name = n
      }
      get message() {
            return this._message
      }
      set message(m) {
            this._message = m
      }
}

function MyObject2(name, message) {
      return {
            name: name.toString(),
            message: message.toString(),
            getName: () => name,
            getMessage: () => message
      }
}
