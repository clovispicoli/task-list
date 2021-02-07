import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="admin-nav-container" >
        <ul>
            <li>
                <NavLink to="/admins/tasks" className="admin-nav-item" >
                    Minhas Tarefas
                </NavLink>
            </li>
            <li>
                <NavLink to="/admins/categories" className="admin-nav-item" >
                    Minhas Categorias
                </NavLink>
            </li>
            <li>
                <NavLink to="/admins/users" className="admin-nav-item" >
                    Meus Usuários
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Navbar; 