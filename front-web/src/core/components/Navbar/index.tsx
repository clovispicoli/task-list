import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { getAccessTokenDecoded, logout } from 'core/utils/auth';
import './styles.scss';

const Navbar = () => {
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();

    useEffect(() => {
        const userCurrentData = getAccessTokenDecoded();
        setCurrentUser(userCurrentData.user_name);
    }, [location]);

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }
    return (
        <nav className="row bg-primary main-nav">   
            <div className="col-3">
                <Link to="/" className="nav-logo-text">
                    <h4>Task List</h4>
                </Link>
            </div>
            <div className="col-6">
                <ul className="main-menu">
                    {/* <li>
                        <NavLink to="/" exact className="nav-link">
                            Todo
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/homes" className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/personals" className="nav-link">
                            Personal
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/works" className="nav-link">
                            Work
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin" className="nav-link">
                            ADMIN
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="col-3 text-right">
                {currentUser && (
                    <>
                        {currentUser}
                        <a 
                            href="#logout" 
                            className="nav-link active d-inline"
                            onClick={handleLogout}
                        >
                            LOGOUT
                        </a>
                    </>
                )}
                {!currentUser && (
                    <Link to="/auth/login" className="nav-link active">
                        LOGIN
                    </Link>
                )}
            </div>
        </nav>
    )
}

export default Navbar; 