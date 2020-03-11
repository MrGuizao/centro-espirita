import React from 'react';
import './login.css';

export default function Login() {
     return (

          <form className="login rounded">
               <div>
                    <span className="white-box rounded"><i class="fas fa-user"></i></span>
                    <input type="email" name="email" className="form-control" placeholder="E-mail..." />
               </div>
               <div>
                    <span className="white-box rounded"><i className="fas fa-key"></i></span>
                    <input type="password" name="password" className="form-control" placeholder="Senha..." />
               </div>
               <button className="btn btn-block btn-primary">Entrar</button>
          </form >
     )
}
