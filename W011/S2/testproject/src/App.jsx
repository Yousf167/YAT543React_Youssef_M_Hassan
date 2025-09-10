import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/contact";
import { Route, Routes } from "react-router-dom";
import NotMatch from "./components/pages/NotMatch";
function App() {
  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path="*" element={<NotMatch/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App;
