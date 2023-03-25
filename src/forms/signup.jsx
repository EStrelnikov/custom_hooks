import React, {useState} from 'react';
import { Input } from './input';


export const Signup = ({onSubmit}) => {
    const [valueForm, setValueForm] = useState(
        {
            name: '',
            nickname: '',
            email: '',
            sex: 'M',
            password: '',
            confirmPassword: ''
        }
    )
    const handleChange = (e) => {
        setValueForm(prevState=> ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div>
            <p>{JSON.stringify(valueForm)}</p>
            <form onSubmit={() => onSubmit()} onChange={handleChange}>
                <div>
                    <Input label='Имя' type="text" name="name" value={valueForm?.name}/>
                </div>
                <div>
                    <Input label='Ник' at='true' type="text" name='nickname' value={valueForm?.nickname}/>
                </div>
                <div>
                    <Input label='Почта' type="email" name="email" value={valueForm?.email}/>
                </div>
                <div className='form_sex'>Пол
                    <Input label='M' type="radio" name='sex' value="M" defaultChecked={valueForm?.sex === "M" ? true : false}/>
                    <Input label='F' type="radio" name='sex' value="F" defaultChecked={valueForm?.sex === "F" ? true : false}/>
                </div>
                <div>
                    <Input label='Пароль' type="password" name='password' value={valueForm?.password}/>
                </div>
                <div>
                    <Input label='Повторите пароль' type="password" name='confirmPassword' value={valueForm?.confirmPassword} />
                </div>
                <div>
                    <button type='submit'>Отправить</button>
                </div>
            </form>
        </div>
    )
}