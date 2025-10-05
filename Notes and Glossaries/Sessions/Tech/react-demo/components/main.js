// // Closure 
// function counter() {
//     let count = 0
//     return function() {
//         count++
//         return count
//     }
// }

// const counterHandler = counter();
// counterHandler()
// counterHandler()
// counterHandler()

// function factorial(5)
// 5 => 120
// {5 : 120 , 6 : 720} 

// 5 * 4 * 3 * 2 * 1 = 120
// { 5 : 120 } 
// Memoization => cache values
// function factorial(num) {
//     if(num === 0) {
//         return 1
//     }

//     return num * factorial(num - 1)
// }

// Memoize Factorial


// function addToOne() {
//     let cache = {}
//     return function(num) {
//         // if.. in check key
//         if(num in cache) {
//             console.log("Returned From Cache")
//             return cache[num]
//         }
//         cache[num] = num + 1
//         return cache[num]
//     }
// }
// // const obj = {x : 1}
// // obj['x'] = 1
// const add = addToOne() 
// add(5)
// add(4) // 5
// add(5) // 6 return form cache


function factorial() {
    let cache = {} 
    return function fact(num) {
        if(num in cache) {
            console.log("Returned From Cache")
            return cache[num]
        }else { 
        cache[num] = num === 0 ? 1 : num * fact(num - 1)
            return cache[num]
        // if(num === 0) {
        //     return 1
        // }
        //  cache[num] = num * fact(num - 1)
        //  return cache[num]
        // }
    }
}
}

const factHandler = factorial();
console.log(factHandler(5))
console.log(factHandler(6))
console.log(factHandler(5))
/**
 * Trace  
 */