function printRev(arr) {
      let i = arr.length - 1
      let rev = ""
      while(i >= 0){
            if(i == arr.length - 1){
                  rev += "["
            }
            rev += arr[i].toString()
            if(i != 0){
                  rev += ", "
            }
            else{
                  rev += "]"
            }
            i--
      }
      console.log(rev);
      
}


let arr = [1,2,3,4,5,6,7,8,9]
printRev(arr)