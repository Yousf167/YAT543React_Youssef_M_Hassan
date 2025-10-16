# Question 1

1. Hoisting is when a variable is lifted up as much as possible to the top of the function. Example:

```js
console.log(x); // 10
// .....
var x = 10;
```

2. `super` is used to access superclass methods and attributes
3. | POC          | `let`              | `const`            | `var`              |
   | ------------ | ------------------ | ------------------ | ------------------ |
   | Function     | defines a variable | defines a constant | defines a variable |
   | Hoisting     | N/A                | N/A                | gets hoisted       |
   | mutability   | mutable            | immutable          | mutable            |
   | reassignment | re-assignable      | not re-assignable  | re-assignable      |

4. rest parameters allow for many parameters to be put in the function definition. An arrow function is another alternative to defining a function. Standard definition syntax is `const|let x = (param1, param2, ..., paramN) => // code (can be wrapped in curly brackets)`. Arrow functions can be used as a parameter for higher order functions. So instead of defining special functions just for it to be used as a callback, it can be used inside the function immediately

```js
let result = arr.map((element) => element * 2);
```

Arrow functions differ in the use of `this`. in normal functions, `this` is determined by the definition context (class method, event handler, etc). But in arrow functions, `this` is lexically inherited to the function. it could turn out to be global `this` depending on the context

5. `readonly` allows text highlight and focus and disables access. `disabled` disallows focus, access, focus and any form of access to the field

6. write the number and the desired unit (16px, 1rem, 1em, 24pc, ...etc)

7. `font-family`

8.

```html
<style>
  #div1 {
    width: 100vw;
    height: 100vh;
  }
  /* option 1 */
  #div2 {
    margin: auto auto;
  }

  /* option 2 */
  #div1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

......

<div id="div1">
  <div id="div2">
    <!-- content -->
  </div>
</div>
```

# Question 2

1. F
2. T
3. T
4. F
5. F
6. T
7. T
8. T

# Question 3

1. 2
3. Encapsulation

# Question 4

1. `Error: fail, fail, fail`
2. `error`
3. `6 8`
4. `error`
5. `boolean, string`
6. 
7. `not defined`
8. `hello world, 10`
9. returns a version of `euros` where the values are doubled
10. `[ batman, bane ]`

