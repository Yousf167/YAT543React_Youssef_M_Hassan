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


function benchmark(func, {
      iterations = 1e5,
      batches = 10,
      warmup = 1000
} = {}) {
      // Warm-up phase to allow JIT optimization
      for (let i = 0; i < warmup; i++) func();

      let results = [];

      for (let b = 0; b < batches; b++) {
            const start = performance.now();
            for (let i = 0; i < iterations; i++) func();
            const end = performance.now();
            results.push((end - start) / iterations); // average per iteration (ms)
      }

      const min = Math.min(...results);
      const max = Math.max(...results);
      const avg = results.reduce((a, b) => a + b, 0) / results.length;

      return { min, avg, max };
}





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
console.log(Object.groupBy(inventory, ({ type }) => type));
console.log();


let s = 'a126343bc6092435e'
let res = s.split('').map((c) => !isNaN(+c) ? c = '' : c).join('')
console.log(res);
s["a"] = "Hello"
console.log(s["a"]);
console.log(s);



function factorial() {
      let cache = {}
      return function fact(num) {
            if (num in cache) {
                  return cache[num]
            }
            cache[num] = num === 0 ? 1 : num * fact(num - 1)
            return cache[num]
      }
}

const factHandler = factorial()
console.log(factHandler(7));
console.log(factHandler(2));
console.log(factHandler(7));
console.log(factHandler(8));
console.log(factHandler);



function traverse(arr, callback) {
      for (let i = 0; i < arr.length; i++) callback(i)
}

arr = [1, 2, 3, 4, 5]
traverse(arr, (i) => {
      arr[i] = 0
})
traverse(arr, (i) => console.log(arr[i]))


function fib(n) {
      if (n == 0) return 0;
      if (n == 1) return 1;
      else return fib(n - 2) + fib(n - 1);
}

console.log(benchmark(() => fib(24), { iterations: 1000, batches: 10, warmup: 10 }));