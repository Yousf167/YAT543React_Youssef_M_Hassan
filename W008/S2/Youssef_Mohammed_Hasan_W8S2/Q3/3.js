function getMax(arr){
      let maxVal = Number.MIN_SAFE_INTEGER, maxIndex = 0
      for(let i in arr){
            if(arr[i] > maxVal){
                  maxVal = arr[i]
                  maxIndex = i
            }
      }
      return [maxIndex, maxVal]
}


let arr = [1,2,3,4,5,6,7,8,9]
console.log(getMax(arr));
