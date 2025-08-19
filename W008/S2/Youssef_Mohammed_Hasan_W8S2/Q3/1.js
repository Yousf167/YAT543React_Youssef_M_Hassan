function sumObjectValues(obj)
{
      let sum = 0
      for(let key in obj){
            if(obj.hasOwnProperty(key)) sum += obj[key]
      }
      return sum
}


let obj = {
      x: 1,
      y: 2,
      z: 3
}

console.log(sumObjectValues(obj));
