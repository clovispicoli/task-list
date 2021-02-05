import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Task from './pages/Task';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const Routes = () => (
    <BrowserRouter>
      <Navbar />
        <Switch>
         <Route path="/" exact> 
            <Home />
         </Route>
         <Route path="/task"> 
            <Task />
         </Route>
         <Route path="/admin"> 
            <Admin />
         </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes; 