function closure(){
      let count = 0
      function foo(x) {
            return x
      }
      function bar(x){
            return 2*x
      }
      
      return {foo, bar} 
}

let c = closure()

console.log(c.foo(2));
console.log(c.bar(2));
