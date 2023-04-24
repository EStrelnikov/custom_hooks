import React from 'react'
import { useAuth } from './../context/authProvider';
import { useNavigate, useLocation } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();
    const from = location.state?.from || '/';
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const login = formData.get('login');
        auth.signin(login, () => navigate(from, {
            replace: true
        }));
    };

    return (
        <>
            <form style={{'margin': '50px 0 0 0', 'text-align': 'center'}} onSubmit={handleSubmit}>
                <div>
                    <label>
                        Логин: <input type='text' name='login'/>
                    </label>
                </div>
                <button style={{width: '241px', margin: '5px 0 0 0'}}>Войти</button>
            </form>
        </>
    )
}
