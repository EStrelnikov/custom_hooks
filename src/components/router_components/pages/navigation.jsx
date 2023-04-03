import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navigation = () => {
    return (
        <>    
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Главная</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/heroes">Герои</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/episodes">Эпизоды</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/locations">Локации</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>    
    )
} 

export default Navigation