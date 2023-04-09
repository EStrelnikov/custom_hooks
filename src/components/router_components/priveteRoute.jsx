import React from 'react'
import { useAuth } from './context/authProvider';
import { Navigate, useLocation } from 'react-router-dom';

export const PriveteRoute = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();
    if (auth.user === null) return <Navigate to='/login' state={{from: location.pathname}} replace />
    return children;
}