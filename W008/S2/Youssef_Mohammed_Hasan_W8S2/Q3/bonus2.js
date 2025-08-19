function add(x){
      return function(y){
            return x + y
      }
}

var a = add(2)(3);
console.log(a);
