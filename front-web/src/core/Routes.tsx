import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Personal from './pages/Personal';
import Work from './pages/Work';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Todo from './pages/Todo';

const Routes = () => (
    <BrowserRouter>
      <Navbar />
        <Switch>
        <Route path="/" exact> 
            <Todo />
         </Route>
         <Route path="/home"> 
            <Home />
         </Route>
         <Route path="/work"> 
            <Work />
         </Route>
         <Route path="/personal"> 
            <Personal />
         </Route>
         <Route path="/admin"> 
            <Admin />
         </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes; 