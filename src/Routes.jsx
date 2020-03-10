import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Login from './components/login/Login';
import Navigation from './containers/navigation/Navigation';

const Routes = () => (
     <BrowserRouter>
          <Switch>
               <Route exact path="/" component={Navigation} />
               {/* <Route path="/login" component={Login} /> */}
          </Switch>
     </BrowserRouter>
)

export default Routes;
