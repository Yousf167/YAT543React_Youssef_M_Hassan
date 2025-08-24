/* 
1- 10
2- "Welcome"
*/

// 3
function testFunc(arr){
      let min = arr[0]
      let minIdx = 0
      for(let i = 1; i < arr.length; i++){
            if(arr[i] <  min){
                  minIdx = i;
                  min = arr[i];
            }
      }
      return minIdx;
}

console.log(testFunc([1,2,5,0,7]));

/*
4- 
      1
      2
      4
      5
*/ 
