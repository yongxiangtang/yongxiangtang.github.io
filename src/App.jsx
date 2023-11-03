import React from 'react';
import Navbar from './routes/Navbar';
import Home from './routes/Home';
import About from './routes/About';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
