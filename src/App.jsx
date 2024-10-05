import React from 'react';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar';
import Home from './pages/home';
import Details from './pages/details';



function App (){
  return (

    <Router>
    <div className='max-h-screen w-full p-6 bg-gray text-gray-600 text-lg' >
      < Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<Details />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App;
