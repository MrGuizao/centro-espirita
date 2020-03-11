import React, { Component } from 'react'
import './App.css';
import api from './services/Api';
import Header from './components/header/Header';
import Navigation from './containers/navigation/Navigation';
import SearchBar from './containers/searchBar/SearchBar';
import Login from './components/login/Login';
import { Switch, Route, BrowserRouter } from 'react-router-dom';


export default class App extends Component {
  state = {
    title: '',
    books: [],
  }

  searchTitle = async name => {
    const res = await api.get(`volumes?q=${name}&printType=books&key=${process.env.REACT_APP_GOOGLE_BOOKS_KEY}`);
    this.setState({ books: res.data.items });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Header />
          <Route exact path="/" render={(props) => <SearchBar searchTitle={this.searchTitle}/>} />
          <Route exact path="/" render={(props) => <Navigation books={this.state.books}/>} />
          <Switch>
            <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>


        {/* <Navigation books={this.state.books} /> */}
      </div>
    );
  }
}