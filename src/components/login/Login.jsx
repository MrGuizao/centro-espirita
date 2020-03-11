import React from 'react';
import './login.css';

export default function Login() {
     return (
          <form className="login rounded">
               <h3 className="bg-primary">Login</h3>
               <section>
                    <div>
                         <label htmlFor="email" class="fas fa-user rounded" />
                         <input type="email" name="email" id="email" className="form-control" placeholder="E-mail..." />
                    </div>
                    <div>
                         <label htmlFor="password" className="fas fa-key rounded" />
                         <input type="password" name="password" id="password" className="form-control" placeholder="Senha..." />
                    </div>
                    <button className="btn btn-block btn-primary">Entrar</button>
               </section>
          </form>
     )
}
