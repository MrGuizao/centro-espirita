import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Navigation from './containers/navigation/Navigation';
// import Login from './components/login/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Navigation} />
          {/* <Route path="/login" component={Login} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
