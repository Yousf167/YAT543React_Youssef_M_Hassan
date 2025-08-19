# Question 1

1) An event loop is a loop that checks if a certain action was done to an object in the document like being clicked or hovered on. When the action is done to the object, the event listener triggers the execution of a function or a block of code
2)  To add to the front we can do:
      
      1) `unshift(val)`
  
  - to add to the back:
      
      1) `push(val)`

# Question 2

```javascript
var b = 1  //b = 1
function outer(){
      var b = 2 //b = 2
      function inner(){
            b++ //b = 3
            var b = 3 // b = 3
            console.log(b) // 3
      }
      inner()
}
outer()
//output: 3
```

```javascript
for(let i = 0; i < 5; i++){
      setTimeout(function(){ console.log(i); }, i * 1000)
}
//works like a tim counter; after one second the output is '1', after 2 seconds the output is '2' and so on
```


```javascript
let arr = ['foo', 'bar']
arr.length = 0
arr.puh(baz)
console.log(arr) //['baz']
```


```javascript
function func(){
      for(let key in arguments){
            console.log(arguments[key])
      }
}
func(1, "hello", true)
//output: 1 hello true
```


```javascript
let car = {
      carName: "BMW",
      carPrice: 1000000
}
console.log(car instanceof Object)
// true
console.log(Object.entries(car)) 
// [["carName", "BMW], ["CarPrice", 1000000]]
```

