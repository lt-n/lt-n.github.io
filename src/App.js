import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Info from './Portfolio';



import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;


// app to do: 
// responsive header/nav (header.js)
// whole site mobile friendly
