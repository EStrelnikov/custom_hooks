import React from 'react'
import { useLocalStorage } from "../custom_hooks/useLocalStorage.js";
export const LocalStorage = () => {
    const [token, { setItem, removeItem }] = useLocalStorage('token');

    return (
      <div className='contaner'>
        <h1>task 2</h1>
        <p>
          Твой токен: { token }
        </p>
        <div>
          <button onClick={() => setItem('new-token')}>
            Задать токен
          </button>
          <button onClick={() => removeItem()}>
            Удалить токен
          </button>
        </div>
      </div>
    );
}