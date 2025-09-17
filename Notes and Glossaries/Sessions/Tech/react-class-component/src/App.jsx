import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotMatch from './components/NotMatch';

class App extends Component {
  render() { 
    return (
      <>
           <Navbar />
           <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='*' element={<NotMatch />}/>
           </Routes>
           <Footer /> 
      </>
    );
  }
}
 
export default App;