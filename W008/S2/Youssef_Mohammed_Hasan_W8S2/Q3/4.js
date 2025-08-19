function dateDiff(d1, d2) {
      if(!(d1 instanceof Date && d2 instanceof Date)){
            throw new Error("One or both of the arguments is not a Date object");
      }
      return Math.abs(d1 - d2) / (1000 * 60 * 60 * 24)
}


let d1 = new Date(2024, 6, 17, 1, 45)
//d1 = 10
let d2 = new Date(2026, 6, 17, 1, 45)
console.log(dateDiff(d1, d2));
