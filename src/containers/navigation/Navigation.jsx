import './style.css';
import React, { Component } from 'react';
import Books from '../../components/books/Books';
import api from '../../services/Api';

export default class Navigation extends Component {
     state = {
          name: 'harry august',
          books: [],
     }

     async componentDidMount() {
          const res = await api.get(`volumes?q=${this.state.name}&printType=books&key=${process.env.REACT_APP_GOOGLE_BOOKS_KEY}`);
          this.setState({ books: res.data.items });
     }

     render() {
          const { books } = this.state;
          return (
               <section className="dashboard-books container-fluid">
                    {
                         books.map(book => <Books key={book.id} books={book} />)
                    }
               </section>
          )
     }
}
