import React from 'react';
import './style.css';

export default function Books({ books }) {
     console.log(books)
     return (
          <div className="books card m-2">
               <div className="card-body text-center">
                    <img className="card-img-top" src={books.volumeInfo.imageLinks.thumbnail} alt="" />
                    <p className="card-text my-1">{books.volumeInfo.title}</p>
               </div>
          </div>
     )
}
