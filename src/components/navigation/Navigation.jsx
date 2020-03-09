import './style.css';
import React, { Component } from 'react';
import Books from '../books/Books';
// import Axios from 'axios';
import api from '../../services/Api';
import Login from '../login/Login';

export default class Navigation extends Component {
     state = {
          name: 'Harry Potter',
          id: [],
          books: [],
          img: ''
     }

     async componentDidMount() {
          const res = await api.get(`volumes?q=${this.state.name}&key=${process.env.REACT_APP_GOOGLE_BOOKS_KEY}`);
          this.setState({ books: res.data.items });
          this.setState({ img: res.data.items.selfLink });

     }

     render() {
          const { books } = this.state;
          return (
               // <Login />
               <section className="dashboard-books container-fluid">
                    {
                         books.map(book => <Books key={book.id} books={book} />)
                    }
               </section>
          )
     }
}
