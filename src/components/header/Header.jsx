import React from 'react';
import './style.css';
// import { Link } from 'react-router-dom';

export default function Header() {
     return (
          <nav className="py-2 px-5 bg-primary d-flex justify-content-between align-items-center">
               <i className="fas fa-ghost"></i>
               <ul className="nav justify-content-end">
                    {/* <Link to="/"> */}
                    <li>Lista</li>
                    {/* </Link> */}
                    <li>Favoritos</li>
                    <li>Cadastrar livro</li>
                    <li>Cadastrar clientes</li>
                    {/* <Link to="/login"> */}
                    <li>Sair</li>
                    {/* </Link> */}
               </ul>
          </nav>

     )
}
