const x = function* (y) {
  yield y * y;
};

console.log(x);


function y(z) {
  z *= z
}

let z = 2
y(z)
console.log(z);
