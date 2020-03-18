import React from 'react';

export default function Favorite({ books }) {
     const src = books.volumeInfo.imageLinks === undefined ? require('../books/no-image.jpg') : `${books.volumeInfo.imageLinks.thumbnail}`;
     const { title, pageCount } = books.volumeInfo;

     return (
          <div className="card m-1">
               <i className="fas fa-times"></i>
               <div className="card-body">
                    <img className="rounded float-left img-book" src={src} alt="" />
                    <p className="card-title">Nome: {title}</p>
                    <p className="card-title">Autor: {books.volumeInfo.authors}</p>
                    <p className="card-title">Páginas: {pageCount}</p>
               </div>
          </div>
     )
}
