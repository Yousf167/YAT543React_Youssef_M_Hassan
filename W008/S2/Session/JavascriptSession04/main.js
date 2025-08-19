const employee = {
    id : 1 , 
    name : "fares" , 
    age : 20 , 
    address : "cairo" , 
    salary : 50000
}

Object.prototype.num = 50


// js => object based language
console.log(Object.keys(employee))
Object.values(employee)
Object.entries(employee) // [['id' , 1] , ['name' : 'fares']]
// employee.first name    employee['first name'] first name
// employee["id"] // value

// console.log(typeof[employee[age]]) // number 

// // for .. in => iterate over key
// for(let key in employee) {
//     if(employee.hasOwnProperty(key)) {

//     }
//     // console.log(typeof(key)) // string
//     console.log(`${key} => ${employee[key]}`)
// }


// const employees = [
//     {name : "Karem" , salary : 60000} , 
//     {name : "Sara" , salary : 50000} , 
//     {name : "fares" , salary : 40000}
// ]

const obj = {
    a : 10 , 
    b : 20
}

// Object.freeze(obj);  // read-only

// delete obj.a // not allowed
// obj.a = 14 // not allowed
// obj.c = 50

// Object.seal(obj)
// obj.a = 12

// // check object sealed or not 
// Object.isFrozen()
// Object.isSealed()

// var carName = "Bmw"
// let testObj = {
//     carName : "Mercedes" , 
//     getCarName : ()=> {
//         console.log(this.carName)
//     }
// }

// testObj.getCarName()
// Arrow function  => doesn't bind this
// arrow => anonymous 
// constructor() 
// arguments

// let greetingUser = user => user

// greetingUser("fares")

// setTimeout(() => console.log(''), 4000);
// setTimeout(function() {} , 2000);

// document.addEventListener('DOMContentLoaded' , ()=>{ } {

// })


// How Js Works 


console.log("Hello World")

setTimeout(() => console.log("Hello From settimeout 01") 
, 4000)
setTimeout(() => console.log("Hello From settimeout 02") 
, 4000)

console.log("Hello Javascript !")

// Single Threaded and Sync 
const btn = document.querySelector('button')

btn.addEventListener('click' , function() {
    console.log("Btn Clicked !")
})
