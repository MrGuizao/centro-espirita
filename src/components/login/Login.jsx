import React from 'react'
import './style.css';

export default function Login() {
     return (
          <form>
               <div>
                    <label htmlFor="email">E-mail: </label>
                    <input type="email" id="email" name="email" />
               </div>
               <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" name="password" />
               </div>
               <div className="button">
                    <button className="btn btn-primary">Entrar</button>
               </div>
          </form>
     )
}
