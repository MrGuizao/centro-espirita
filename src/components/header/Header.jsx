import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Header() {
     return (
          <nav className="py-2 px-5 bg-primary d-flex justify-content-between align-items-center">
               <Link to="/" className="fas fa-ghost"></Link>
               {/* <i className="fas fa-ghost"></i> */}
               <ul className="nav justify-content-end">
                    <Link to="/favoritos" className="linkagem">Favoritos</Link>
                    <Link to="/livros" className="linkagem">Cadastrar livro</Link>
                    <Link to="/clientes" className="linkagem">Cadastrar clientes</Link>
                    <Link to="/login" className="linkagem">Entrar</Link>
               </ul>
          </nav>

     )
}
