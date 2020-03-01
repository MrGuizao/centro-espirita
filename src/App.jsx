import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
// ${process.env.REACT_APP_KEY}

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />


      {/* <i className="fas fa-star"></i> */}
    </div>
  );
}

export default App;
