import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Personal from './pages/Personal';
import Work from './pages/Work';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Todo from './pages/Todo';
import HomeDetails from './pages/Home/HomeDetails';
import PersonalDetails from './pages/Personal/components/PersonalDetails';
import WorkDetails from './pages/Work/components/WorkDetails';

const Routes = () => (
    <BrowserRouter>
      <Navbar />
        <Switch>
        <Route path="/" exact> 
            <Todo />
         </Route>
         <Route path="/homes" exact> 
            <Home />
         </Route>
         <Route path="/homes/:homeId"> 
            <HomeDetails />
         </Route>
         <Route path="/works" exact> 
            <Work />
         </Route>
         <Route path="/works/:workId"> 
            <WorkDetails />
         </Route>
         <Route path="/personals" exact> 
            <Personal />
         </Route>
         <Route path="/personals/:personalId"> 
            <PersonalDetails />
         </Route>
         <Route path="/admin"> 
            <Admin />
         </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes; 