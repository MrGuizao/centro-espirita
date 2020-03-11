import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/login/Login';
import Books from './components/books/Books';

const Routes = () => (
     <BrowserRouter>
          <Switch>
               <Route exact path="/" render={props => <Navigation />} />
               <Route exact path="/" render={props >= <Books />} />
               <Route path="/login" component={Login} />
          </Switch>
     </BrowserRouter>
)

export default Routes;
