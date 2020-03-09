import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navigation from './containers/navigation/Navigation';
import SearchBar from './containers/searchBar/SearchBar';

import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Routes />


      {/* <i className="fas fa-star"></i> */}
    </div>
  );
}

export default App;
