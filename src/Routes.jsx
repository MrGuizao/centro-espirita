import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Books from './components/books/Books';

const Routes = () => (
     <BrowserRouter>
          <Switch>
               <Route exact path="/" component={Books} />
               <Route path="/login" component={Login} />
          </Switch>
     </BrowserRouter>
)

export default Routes;
