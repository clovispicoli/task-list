import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from '../Auth';
import Navbar from './components/Navbar';
import Tasks from './components/Tasks';
import './styles.scss';

const Admin = () => (
    <div className="admin-container">
        < Navbar />
        <div className="admin-content">
            <Switch>
                <Route path="/admin/homes">
                    <Tasks />
                </Route>
                <Route path="/admin/personals">
                    <Tasks />
                </Route>
                <Route path="/admin/works">
                    <Tasks />
                </Route>
                <Route path="/admin/categories">
                    <Tasks />
                </Route>
                <Route path="/admin/users">
                    <Tasks />
                </Route>
                <Route path="/admin/auth">
                    <Auth />
                </Route>
            </Switch>
        </div>
    </div>
);

export default Admin;