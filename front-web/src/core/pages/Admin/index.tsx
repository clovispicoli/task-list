import PrivateRoute from 'core/components/Routes/PrivateRoute';
import React from 'react';
import { Switch } from 'react-router-dom';
import Auth from '../Auth';
import Navbar from './components/Navbar';
import Tasks from './components/Tasks';
import './styles.scss';

const Admin = () => (
    <div className="admin-container">
        < Navbar />
        <div className="admin-content">
            <Switch>
                <PrivateRoute path="/admin/homes">
                    <Tasks />
                </PrivateRoute>
                <PrivateRoute path="/admin/personals">
                    <Tasks />
                </PrivateRoute>
                <PrivateRoute path="/admin/works">
                    <Tasks />
                </PrivateRoute>
                <PrivateRoute path="/admin/categories">
                    <Tasks />
                </PrivateRoute>
                <PrivateRoute path="/admin/users" allowedRoutes={['ROLE_ADMIN']}>
                    <Tasks />
                </PrivateRoute>
                <PrivateRoute path="/admin/auth/login">
                    <Auth />
                </PrivateRoute>
            </Switch>
        </div>
    </div>
);

export default Admin;