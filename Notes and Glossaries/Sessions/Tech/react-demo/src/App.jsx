import { Route, Routes } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import Home from "./components/pages/Home";
import Create from "./components/pages/Create";
import Contact from "./components/pages/Contact";
import PageNoFound from "./components/pageNotFound/PageNotFound";
import Details from "./components/pages/Details";
import Edit from "./components/pages/Edit";
import Test from "./components/pages/Test";

function App() {
  return ( 
    <>
        <Navbar /> 
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/create" element={<Create />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<PageNoFound />} />
         </Routes>
        <Footer />
    </>
   );
}

export default App;