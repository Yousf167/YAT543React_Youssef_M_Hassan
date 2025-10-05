import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Display from "./components/Display"
import Navbar from "./components/Navbar"
import AddNote from "./components/AddNote"

function App() {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="add" element={<AddNote />}/>
      </Routes>
    </>
  )
  
}

export default App
