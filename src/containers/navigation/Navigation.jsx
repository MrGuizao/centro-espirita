import React, { Component } from 'react';
import './style.css';
import Books from '../../components/books/Books';
import api from '../../services/Api';
import SearchBar from '../searchBar/SearchBar';

export default class Navigation extends Component {
     state = {
          title: '',
          books: [],
     }

     searchTitle = async name => {
          const res = await api.get(`volumes?q=${name}&printType=books&key=${process.env.REACT_APP_GOOGLE_BOOKS_KEY}`);
          this.setState({ books: res.data.items });
     }

     render() {
          const { books } = this.state;
          return (
               <>
                    <SearchBar searchTitle={this.searchTitle} />
                    <section className="dashboard-books">
                         {
                              books.map(book => <Books key={book.id} books={book} />)
                         }
                    </section>
               </>
          )
     }
}
