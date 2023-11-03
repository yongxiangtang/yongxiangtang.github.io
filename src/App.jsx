import React from 'react';
// import Home from './routes/Home';
// import About from './routes/About';
import Header from './routes/Header';
import Footer from './routes/Footer';
import Main from './routes/Main';

// import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      {/* <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
