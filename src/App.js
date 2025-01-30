import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'

import Navbar from './Navbar';

import Home from './Home';

function App() {

  return (
    <div className='App'>
      <header>
        <Navbar />
      </header>
      <article>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </article>
      <footer></footer>
    </div>
  );
}

export default App;


// app to do: 
// lots.
