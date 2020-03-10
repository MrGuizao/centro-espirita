import React, { Component } from 'react'
import './App.css';
import api from './services/Api';
import Header from './components/header/Header';
import Navigation from './containers/navigation/Navigation';
import SearchBar from './containers/searchBar/SearchBar';

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
        <Header />
        <SearchBar searchTitle={this.searchTitle} />
        <Navigation books={this.state.books} />
      </div>
    );
  }
}