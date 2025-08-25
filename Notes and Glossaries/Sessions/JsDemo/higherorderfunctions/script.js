// function take another function as an argument 
// function return function
// functional programming
// map , filter , reduce , forEach , 
// find , findIndex , some , every


// const salaries = [1000 , 2000 , 3000 , 4000]

// const doubledSalaries = salaries.forEach(sal => console.log(sal * 2))

//salaries.map(); // return new array

/* const salariesAfterBonus = 
        salaries.map((salary) => salary + 1000)
const doubledSalaries = salaries.map(sal => sal * 2)
console.log(doubledSalaries) 

// for(let salary of salaries) {
//     salariesAfterBonus.push(salary + 1000)
// } */

// const students = [
//     {
//         name : "fares" , points : 90
//     } , 
//     {
//         name : "david" , points : 80
//     } , 
//     {
//         name : "Salma" , points : 88
//     } , 
//     {
//         name : "Sara" , points : 75
//     }
// ]

// return new array based on condition []
// find return first object 
// const results = students.findIndex(std => std.points > 85)
// const results = []
// for(let std of students) {
//     if(std.points > 85) {
//         results.push(std)
//     }
// }



// const salaries = [1000 , 2000 , 3000 , 4000 , 50000]

// const result = salaries.some(val => val > 10000)

// if(result) {

// }

// some vs every  or and
// some return true  => or
// every return true => and

// const totalSalaries = salaries.reduce((prev , curr) => {
//     return prev + curr
// })


// const arr = ["Sat" , "Sun" , "Mon" , "Tue"]
// arr.reverse();  // alter original array
// arr.toReversed();
 // create new array => keep original array unchanged

// sort()
// toSorted()

// findLast
// findLastIndex

// const numbers = [10 , 20 , 30 , 40 , 
//     50 , 35 , 25]

// numbers.with(1 , 80);

// let value = numbers.findLast(num => num > 40);
// console.log(value);

// 50 start end => return first one 



function sumObjectValues(obj) {
    let total = 0
    for(let key in obj) {
        if(typeof obj[key] === 'number' &&
            Object.hasOwn(obj , key)
        ) {

        }
    }
}

// Object.hasOwn(obj , key) 
//Object.prototype.hasOwnProperty();

// alert => polyfill => alternate code

const msg = "hello ahmed hello ahmed hello ahmed"

msg.replaceAll("ahmed" , "fares")

// es5 2009 
// es6 