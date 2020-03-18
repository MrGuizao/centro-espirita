import React from 'react'
import './style.css';
import Books from '../../components/books/Books';

export default function Navigation({ books }) {
     const favorite = false;
     function handleFavorite(id) {
          if (books.id === id) {
               // books.map(book => <Favorite key={book.id} books={book} />)
               console.log(favorite)
          } else {
               books.map(book => <Books key={book.id} books={book} />)

          }
     }
     return (
          <section className="dashboard-books">
               {
                    books.map(book => <Books key={book.id} books={book} />)
               }
          </section>
     )
}
