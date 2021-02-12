import { isAllowedByRole } from 'core/utils/auth';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="admin-nav-container" >
        <ul>
            <li>
                <NavLink to="/admin/homes" className="admin-nav-item ">
                    Homework
                </NavLink>
            </li>
            <li>
                <NavLink to="/admin/personals" className="admin-nav-item ">
                    Personal tasks
                </NavLink>
            </li>
            <li>
                <NavLink to="/admin/works" className="admin-nav-item ">
                    Work Tasks
                </NavLink>
            </li>
            {isAllowedByRole(['ROLE_ADMIN']) && (
            <li>
                <NavLink to="/admin/users" className="admin-nav-item ">
                    My users
                </NavLink>
            </li>
             )}
        </ul>
    </nav>
);

export default Navbar; 