// Sol 1
let arr = [1,2,3,4]
console.log(`original: ${arr}`);

arr.reverse()
console.log(`reversed: ${arr}`);


// Sol 2
console.log();
function getReverse(arr) {
      let rev = []
      for(let i = arr.length - 1; i >= 0; i--) rev.push(arr[i])
      return rev
}
let rev = getReverse(arr)
console.log(`original: ${arr}`);
console.log(`reversed: ${rev}`);


// Sol 3
console.log();
function reverseInPlace(arr){
      for(let i = 0, j = arr.length - 1; i < j; i++, j--){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
      }
}
console.log(`original: ${arr}`);
reverseInPlace(arr)
console.log(`reversed: ${arr}`);