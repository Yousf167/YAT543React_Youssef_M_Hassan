import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TechNews from './components/TechNews';
import PoliticalNews from './components/PoliticalNews';
import SportsNews from './components/SportsNews';
import CrimeNews from './components/CrimeNews';
import EntertainmentNews from './components/EntertainmentNews';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/tech' element={<TechNews />}></Route>
        <Route path='/politics' element={<PoliticalNews />}></Route>
        <Route path='/sports' element={<SportsNews />}></Route>
        <Route path='/crimes' element={<CrimeNews />}></Route>
        <Route path="/entertainment" element={<EntertainmentNews />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;