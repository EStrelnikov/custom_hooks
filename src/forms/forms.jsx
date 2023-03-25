import React, { useState } from 'react';
import { Signin } from "../forms/signin";
import { Signup } from "../forms/signup";

export const Forms = () => {
    const [newProfile, setNewProfile] = useState(false);
    const handleChangeValueProfile = () => setNewProfile(!newProfile)
    return <>
        <div>{newProfile ?  <Signup /> : <Signin />}</div>
        <div onClick={handleChangeValueProfile}>{newProfile ? <a href='#'>У меня есть профиль</a> : <a href='#'>У меня нет профиля</a>}</div>
    </>
}