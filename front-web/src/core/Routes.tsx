import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Todo from './pages/Todo';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Personal from './pages/Personal';
import Work from './pages/Work';
import Admin from './pages/Admin';
import HomeDetails from './pages/Home/components/HomeDetails';
import PersonalDetails from './pages/Personal/components/PersonalDetails';
import WorkDetails from './pages/Work/components/WorkDetails';
import Auth from './pages/Auth';

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
         <Route path="/personals" exact>
            <Personal />
         </Route>
         <Route path="/works" exact>
            <Work />
         </Route>
         <Route path="/homes/:homeId" exact>
            <HomeDetails />
         </Route>
         <Route path="/personals/:personalId" >
            <PersonalDetails />
         </Route>
         <Route path="/works/:workId" >
            <WorkDetails />
         </Route>
            <Redirect from="/admin" to="/admin/homes" exact/>
            <Redirect from="/admin" to="/admin/personals" exact/>
            <Redirect from="/admin" to="/admin/works" exact/>
            <Redirect from="/admin" to="/admin/categories" exact/>
            <Redirect from="/admin" to="/admin/users" exact/>
         <Route path="/admin" >
            <Admin />
         </Route>
         <Redirect from="/admin/auth" to="/admin/auth/login" exact/>
         <Route path="/admin/auth">
            <Auth />
         </Route>
      </Switch>
   </BrowserRouter>
);

export default Routes; 