// // stop watch 
// // Dom Manpulation

// import { useEffect, useRef } from "react";

// // useRef => Track Stack
// function App() {
//   let textInput = useRef(); // object{current: element}
//   // useEffect(() => {
//   //   //textInput.current.focus();
//   //   textInput.current.style.color = "red"
//   // } , [])

//   const onClickBtn = () => {
// textInput.current.style.color = "red"
//   }

//   return ( 
//     <>
//     <button onClick={onClickBtn}>Click Action</button>
//         <input type="text" ref={textInput}/>
//     </>
//    );
// }

// export default App;

import { useEffect, useRef, useState } from "react";

function App() {

  const [val , setValue] = useState("");
  const prevVal = useRef("")
  // prevVal => object {current : value}
  // useEffect() // onUpdate
  useEffect(() => {
    // store current value before sate change
    prevVal.current = val;
  } , [val])
  return ( 
    <>
       <h1>Current State Value : {val}</h1>
        <h2> Previous State Value : {prevVal.current} </h2>
      <input type="text" 
      onChange={(e) => setValue(e.target.value)}/>
    </>
   );
}

export default App;