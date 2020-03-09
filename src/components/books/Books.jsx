import React from 'react';
import './style.css';

export default function Books({ books }) {
     console.log(books);
     const src = books.volumeInfo.imageLinks === undefined ? require('./no-image.jpg') : `${books.volumeInfo.imageLinks.thumbnail}`;
     return (
          <div className="books card m-2">
               <div className="card-body text-center">
                    <img className="card-img-top" src={src} alt="" />
                    <img className="card-img-top" src={books.selfLink} alt="" />
                    <p className="card-text my-1">{books.volumeInfo.title}</p>
               </div>
          </div>
     )
}
