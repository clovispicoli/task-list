import React from 'react';
import { ReactComponent as AuthImage } from 'core/assets/images/auth.svg';
import { Route, Switch } from 'react-router-dom';
import './styles.scss';
import Login from './components/Login';

const Auth = () => (
    <div className="auth-container">
        <div className="auth-info">
            <h1 className="auth-info-title">
                Organize duas tarefas <br /> no Task List
            </h1>
            <p className="auth-info-subtitle">
                Tenha uma melhor organização<br /> e aumente sua produtividade.
            </p>
            <AuthImage />
        </div>
        <div className="auth-content">
            <Switch >
                <Route path="/auth/login">
                    <Login />
                </Route>
                <Route path="/auth/register">
                    <h1>Cadastro</h1>
                </Route>
                <Route path="/auth/recover">
                    <h1>Recuperar</h1>
                </Route>    
            </Switch>
        </div>
    </div>
);

export default Auth; 