let n = 0
while (n <= 10) {
      n++
      if (n == 5) continue;
      console.log(n);
}
class ABC {
      constructor() {
            this.a = 10;
            this.b = 20;
            this.c = 30;
      }
}

let abc = new ABC()
for (let prop in abc) {
      console.log(`${prop}: ${abc[prop]}`);
}

let arr = [1, 2, 3, 4, 5, 6]

for (let index in arr) {
      console.log(`${index}: ${arr[index]}`)
}


function timeFunc(func, iterations) {
      let sum = 0
      for (let i = 0; i <= iterations; i++) {
            const start = performance.now()
            func()
            sum += performance.now() - start;
      }
      return sum / iterations
}

// console.log(timeFunc(() => {
//      const s = "abcdefghijklmnopqrstuvwxyz"
//      for (let i = 0, j = s.length - 1; i < j; i++, j--) {
//            const temp = s[i]
//            s[i] = s[j]
//            s[j] = temp
//      }
// }, 100000));


let x = (function () {
      return Math.E
})()
console.log(x);


arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 4, 6, 3, 2, 7, 90, 9, 6, 0, 2, 45, 7, 8, 9, 7, 4, 34, 0, 245, 0, 4454]
let freq = new Map()
for (let element of arr) {
      freq[element] = 0
}
for (let element of arr) {
      freq[element]++
}
for (let i in freq) {
      console.log(`${i} : ${freq[i]}`);

}

console.log()
arr = [1, 2, 3, 4, 5, 6, 7]
let results = []
results.push(arr.map((num) => num * 2))
results.push(arr.filter((num) => num % 2))
results.push(arr.map((num) => num * 2).every((num) => num % 2 == 0))
results.push(arr.some((num) => num % 2 == 0))
results.push(arr.reduce((sum, curr) => sum + curr, 0) / arr.length)

for (let i of results) console.log(JSON.stringify(i));
console.log();

const inventory = [
      { name: "asparagus", type: "vegetables" },
      { name: "bananas", type: "fruit" },
      { name: "goat", type: "meat" },
      { name: "cherries", type: "fruit" },
      { name: "fish", type: "meat" },
];
console.log(Object.groupBy(inventory, ({type}) => type));
console.log();


let s = 'a126343bc6092435e'
let res = s.split('').map((c) => {
      if(!isNaN(+c)) c = 'x'
      return c
}).join('')
console.log(res);
