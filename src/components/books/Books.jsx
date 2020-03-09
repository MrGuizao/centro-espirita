import React from 'react';
import './style.css';

export default function Books({ books }) {
     console.log(books);
     const src = books.volumeInfo.imageLinks === undefined ? require('./no-image.jpg') : `${books.volumeInfo.imageLinks.thumbnail}`;
     const { title, pageCount } = books.volumeInfo;

     return (
          <div className="card m-2">
               <div className="card-body">
                    <img className="rounded float-left img-book" src={src} alt="" />
                    <p className="card-title">Nome: {title}</p>
                    <p className="card-title">Autor: {books.volumeInfo.authors[0]}</p>
                    <p className="card-title">Páginas: {pageCount}</p>
               </div>
          </div>
     )
}
