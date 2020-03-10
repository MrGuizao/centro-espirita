import React from 'react';
import './style.css';

export default function Books({ books }) {
     const src = books.volumeInfo.imageLinks === undefined ? require('./no-image.jpg') : `${books.volumeInfo.imageLinks.thumbnail}`;
     const { title, pageCount } = books.volumeInfo;

     return (
          <div className="card m-1">
               {/* <i className="fas fa-star"></i> */}
               <i class="far fa-heart"></i>
               <div className="card-body">
                    <img className="rounded float-left img-book" src={src} alt="" />
                    <p className="card-title">Nome: {title}</p>
                    <p className="card-title">Autor: {books.volumeInfo.authors}</p>
                    <p className="card-title">Páginas: {pageCount}</p>
               </div>
          </div>
     )
}
