import React from 'react';
import { useState } from 'react';
import { Input } from './input';

export const Signin = ({onSubmit}) => {
    const [valueInputs, setvalueInputs] = useState({
        email: '',
        password: ''
    });

    function handleChangeInputs(e) {
        setvalueInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <>
        <form onSubmit={()=> onSubmit()} >
            <div>
                <Input type="email" label='Email' name='email' id='email' value={valueInputs.email} onChange={handleChangeInputs}/>
            </div>
            <div>    
                <Input label='Пароль' type="password" name='password' id='password' value={valueInputs.password} onChange={handleChangeInputs} />
            </div>    
            <button>Войти</button>
        </form>
        </>
    )
}