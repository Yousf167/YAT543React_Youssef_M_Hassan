import { useState } from "react"

function App() {
  // state => usestate track state (function component)
  // store update 
  const [title , setTitle] = useState("react 18 basics course")
  const [count , setcount] = useState(0)  

  const changetitle = () => {
    setTitle("react 19 fundamentals course")
  }

  const incrementcounter = () => {
    setcount(count + 1)
  }

  const decrementcounter = () => {
    if(count > 0) {
      setcount(count - 1)
    }
  }

  return (
    <>
      <div className="container my-4">
        <button onClick={changetitle}> update course </button>
      <h1 style={{
        textTransform : "capitalize"
      }}> {title} </h1>
      <button onClick={incrementcounter}>increment + </button>
      <button onClick={decrementcounter}>decrement -</button>
      <h2> counter : {count} </h2>
      </div>
    </>
  )
}

export default App
