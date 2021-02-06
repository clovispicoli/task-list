import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <Link to="/" className="nav-logo-text">
                <h4>TASK LIST</h4>
            </Link>
        </div>
        <div className="col-6 offset-2">
            <ul className="main-menu">
                <li>
                    <NavLink to="/" activeClassName="active">
                        Todo
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home" activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/personal" activeClassName="active">
                        Personal
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/work" activeClassName="active">
                        Work
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin" activeClassName="active">
                        Admin
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar; 