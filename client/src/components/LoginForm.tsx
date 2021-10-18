import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const LoginForm : FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const {store} = useContext(Context)

    return (
        <div>
            <input type="email"
                   placeholder='Email..'
                   value={email}
                   onChange={event => setEmail(event.target.value)}
            />
            <input type="password"
                   placeholder='Password..'
                   value={password}
                   onChange={value => setPassword(value.target.value)}
            />
            <button onClick={() => store.login(email, password)}>
                Логин
            </button>
            <button onClick={() => store.registration(email, password)}>
                Регистрация
            </button>
        </div>
    );
};

export default observer(LoginForm)
