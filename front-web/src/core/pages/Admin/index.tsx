import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from 'core/pages/Admin/components/Navbar';
import Tasks from 'core/pages/Admin/components/Tasks';

const Admin = () => (
    <div className="admin-container">
         <Navbar />
         <div className="admin-content">
            <Switch>
                <Route path="/admins/tasks">
                    <Tasks />
                </Route>
                <Route path="/admins/categories">
                    <h1>Categories</h1>
                </Route>
                <Route path="/admins/users">
                    <h1>Users</h1>
                </Route>
            </Switch>
         </div>
    </div>
);

export default Admin;