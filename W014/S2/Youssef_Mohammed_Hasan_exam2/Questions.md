# Q2

1.  ??

2.  it handles it by passing the `prop` parameter to each child component untill it reaches the terget component. this is bad because it makes the code more verbose and harder to debug. Therefore it is better to globalize the prop as a context

3.  | stateless                                      | statefull                                                     |
    | ---------------------------------------------- | ------------------------------------------------------------- |
    | doesn't manage its own state                   | manages its state                                             |
    | easier to test and debug                       | harder due to managing state logic                            |
    | pure in output (if given x, it always gives y) | given x, it doesnt always give y due to state change (impure) |

4.  No. but they inherit it from the surrounding scope

5.  No. It returns the mutated version of the array whithout changing it

6.  | map(calbackfn)                                                                           | foreach()                   |
    | ---------------------------------------------------------------------------------------- | --------------------------- |
    | calls the calback function on each element in the array                                  | same                        |
    | returns an array that contains the results from the `callbackfn`                         | returns `undefined`         |
    | does not modify the original array                                                       | modifies the original array |
    | \*cannot use loop keywords (`break`, `continue`) unless the `callbackfn` contains a loop | same                        |

          *example:

```js
let arr = [1,2,3,4,5]
arr.foreach((x) => {
      for(...){
            if(...){
                  break
            }
            else if(...){
                  continue
            }
            else{
                  ...
            }
      }
})
```

7. it is an object that represents the eventuall completion or rejection of an async operation. it is most used when fetching data. Promises have three states: pending, fulfilled, and rejected. as an everyday-life example, it would represent ordering something online:

   1. you order the item (`new Promise((resolve, reject) => {orderItem('...')})`)
   2. the service does some operations and decides whether they can ship it or not:
      - they define the pickup point, route, arrival time (pending)
      - if they can ship it, it arrives after ~3 days (fulfilled) (`resolve("Shipping item...")`)
      - if not, they send a notification with the rejection (rejected) (`reject("Error: ...")`)

8. use Object.freeze(obj)

9. use JSON.parse(jsonStr)

10. for async functions, use a `try..catch` block to handle errors. for promises, use `.then(...).catch(...)`.

11. they are external key-value pairs that change the behaviour of the app without changing the codebase.

12. responsive design is to design a website that is able to handle different devices in terms of screen dimensions, resolution and performance. there are multiple ways to handle different screen dimensions:

    - CSS media queries
    - JS `window.innerWidth` property
    - CSS frameworks' responsive classes (Tailwind: `lg:text-xl` Bootstrap: `fs-lg-4`)

13. accessing a non-existent property returns `undefined`, `Object.keys(obj).indexOf('prop')` returns and index if found, `-1` if not. `Object.hasOwn(obj, 'prop')` returns `true` if the property exists and vice versa.

14. Memoization is to save the values of a computation to speed up repetitive calculations. lets say we need to calculate `fibonacci(24)`, which is a heavy operation. with memoization, you only need to calculate the value once and save it in a data container. So next time you need o find `fibonacci(24)`, you just need to get the value from the data container.  
    example:

```js
function fibInit() {
  let results = [1, 1];
  return function (n) {
    if (n < 0) {
      console.error("Illegal Arguments: n cannot be less than 0");
      return null;
    }
    if (n == 0 || n == 1) return { result: 1, resultsArr: results };
    if (results[n]) return { result: results[n], resultsArr: results };

    for (let i = results.length; i <= n; i++) {
      results.push(results[i - 1] + results[i - 2]);
    }
    return { result: results[n], resultsArr: results };
  };
}

let fib = fibInit();

console.log(fib(2).result); // 2
console.log(fib(20).result); // 10946
console.log(fib(12).result); // 233
console.log(fib(0).resultsArr); /*
[
      1,    1,    2,    3,    5,
      8,   13,   21,   34,   55,
     89,  144,  233,  377,  610,
    987, 1597, 2584, 4181, 6765,
  10946
]
*/
```

in React, there is the `useMemo()` hook that caches the results of a calculation between re-renders untill the dependancies change. if the value exists in the cache, it fetches it and uses it. if not, it calculate the value and caches it for dependancy comparison in the next render

# Q3

1. prints the array contents
2.

```
After displayData call
Data Fetched
```

3.

```html
<h1>Hello, Guest</h1>
<h1>Hello, Guest</h1>
```

4. ??
5. undefined
6. `bear, bear`, `sheep sheep`
7. undefined
8. swim

# Q4

1. the difference between them lies in the difference between `private` and `public`; where private restricts direct access from outside the class and requires getters and setters for access, and public exposes the attribute to direct external access using the dot notation (obj.attr). therefore public constructors are invoked with `new classConstructor()` and private constructors are invoked with a public function that invokes the constructor and returns the constructed object (`let obj = createObj()`)

2. Encapsulation is to prevent access to some data members within a class. Abstraction is to hide the
   implementations of functions and data members from the users when it is not necessary and only
   show what the class should do and not how it works

3. in the context of variable initialization, `final` creates a variable that cannot be reassigned or mutated, a constant. In the context of method declarations, `final` methods are functon that cannot be overridden by subclasses. For classes, `final` classes cannot be extended

4. Singleton is to create one instance of a class and provide a global reference to the instance, most often used for creating a connection to a database or to create on instance of an aplication window

5. static type polymorphism allows method polymorphism within a class. since it chooses on of the methods at compile time, it allows the calling of one of the methods based on the given parameters

6. | Q   | A                                                                              |
   | --- | ------------------------------------------------------------------------------ |
   | a   | false: static methods are bound at compile time                                |
   | b   | false: abstraction has nothing to do with implementation-level problem-solving |
   | c   | true                                                                           |

# Q6

1. it is not provided a depenedancy array which will only make the component render once and not rerender on dependancy change
2. 

```js
// pure function
function equation(x) {
  return 2 * x + 10;
}

function accumulator() {
  return function (y) {
    x + y;
  };
}
/*
in equation: passing 1 as a parameter will always yeild 12. 
in accumulator: passing any two numbers to the outer and inner function will always get the same answer since the parameters are captured and never modified
a pure function supplies an output that is solely depenedant on the inputs without any side effects involved
*/

// impure
let chaosFactor = 10;
function equation2() {
  return (2 * x + 10) / chaosFactor;
}

function accumulator2() {
  let total = 0;
  return function (y) {
    x += y;
    return x;
  };
}

/*
impure functions violate some rules of pure functions like:
      1. same input same output
      2. external state modification
      3. returning different results for the same input

in case of the equation2: an external state can be modified to get a different output (chaosFactor) 
which voilates rules 1 and 2, it also depends on an outer state to perform a calculation
*/

//in case of the accumulator2:
accumulator2(5); // 5
accumulator2(5); // 10
accumulator2(5); // 15
// we observe that the output changes with the same input
```

### How it ties into react
statefull React components rely on states for interactivety. the functions that rely on state are impure based on the definition above 
```jsx
function Header() {
  let [header, setHeader] = useState("");
  useEffect(() => {
    if (somethingHappendToADifferentComponent()) setTitle(requiredtitle);
  }, [requiredtitle, title]);
  return <h1>{title}</h1>;
}
export default Header;
```

3. you could also see the implementation in the 'dropdown' folder
```jsx
import React from 'react';
function Navbar() {
  let dropdownMenu = React.useRef(null)

  const handleClick = () => {
    console.log(dropdownMenu.current)
    dropdownMenu.current.classList.toggle('hidden')
  }
  return (
    <nav className='flex justify-between p-5 bg-blue-400'>
      <h1>Brand</h1>
      <div className='bg-amber-50 p-3 gap-2 absolute right-6 top-20 flex flex-col' ref={dropdownMenu}>
        <a>Lorem</a>
        <a>Lorem</a>
        <a>Lorem</a>
        <a>Lorem</a>
        <a>Lorem</a>
        <a>Lorem</a>
        <a>Lorem</a>
      </div>
      <button className='border-2 border-white rounded-4xl px-3 py-1 text-white transition-all hover:bg-white hover:text-blue-500 hover:border-blue-500' onClick={handleClick}>Dropdown</button>
    </nav>
  )
}
export default function App() {
  return (
    <Navbar />
  );
}
```

5. 5