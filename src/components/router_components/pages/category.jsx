import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Loading from './loading';

const Category = () => {
    return (
        <>
            <ul>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/categories/heroes">Герои</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/categories/episodes">Эпизоды</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/categories/locations">Локации</NavLink>
                </li>
            </ul>
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>    
        </>
    )
} 

export default Category