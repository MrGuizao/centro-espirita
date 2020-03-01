import './style.css';
import React, { Component } from 'react';
import Books from '../books/Books';
// import Axios from 'axios';
import api from '../../services/Api';

export default class Navigation extends Component {
     state = {
          name: 'harry potter',
          id: [],
          books: [],
          img: ''
     }

     async componentDidMount() {
          const res = await api.get(`volumes?q=${this.state.name}&key=${process.env.REACT_APP_GOOGLE_BOOKS_KEY}`);
          this.setState({ books: res.data.items });
          // this.setState({books: res.data.items[0].volumeInfo.imageLinks.thumbnail});
          // this.setState({img: this.state.books.volumeInfo.imageLinks.thumbnail});
          // this.setState({id: res.books.items.id});

          // console.log(this.state.books);
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
