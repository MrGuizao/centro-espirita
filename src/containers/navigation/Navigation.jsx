import React from 'react'
import './style.css';
import Books from '../../components/books/Books';

export default function Navigation({ books }) {
     return (
          <section className="dashboard-books">
               {
                    books.map(book => <Books key={book.id} books={book} />)
               }
          </section>
     )
}
