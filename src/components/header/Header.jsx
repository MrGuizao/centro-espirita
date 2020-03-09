import React from 'react';
// import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
     return (
          <header className="container-fluid d-flex justify-content-between align-items-center py-2 px-5 bg-primary">
               <h1>Centro Espírita</h1>
               <button className="bg-transparent border-0">
                    {/* <Link> */}
                         <i className="fas fa-sign-in-alt">Login</i>
                    {/* </Link> */}
               </button>

          </header>
     )
}
