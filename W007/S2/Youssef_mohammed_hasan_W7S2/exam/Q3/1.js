function minArr(arr){
      if(arr.length == 0){
            throw new Error("The array is emtpy")
      }
      let ans = arr[0]
      for(let i = 1; i < arr.length; i++){
            ans = Math.min(arr[i], ans)
      }
      return ans
}


let arr = [1,2,3,4,5,6,7,8,9,0]
console.log(minArr(arr))