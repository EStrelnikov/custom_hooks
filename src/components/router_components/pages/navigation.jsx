import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthStatus } from './../authStatus';

const Navigation = () => {
    return (
        <>    
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Главная</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categories">Категории</NavLink>
                            </li>
                        </ul>
                        <AuthStatus />
                    </div>
                </div>
            </nav>
            <Outlet />
        </>    
    )
} 

export default Navigation