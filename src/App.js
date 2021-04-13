import './App.scss';
import React, { useState, useEffect } from 'react';
import Home from './components/Home'
import Header from './components/Header'



const App = () => {
  const [click, setClick] = useState(0)
    
  const handleChange = () => {
    setClick (click + 1)
    console.log("click")
  }

  return (
    <div className="App">
      <Home click={click} handleChange={handleChange}/>
      <Header click={click}/>
    </div>
  );
}

export default App;
