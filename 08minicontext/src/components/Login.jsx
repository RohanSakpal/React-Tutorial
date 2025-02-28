import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Email:', username);
        console.log('Password:', password);
        setUser({username, password})
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="text" value={username} placeholder='username'
                onChange={(e) => setUsername(e.target.value)} />

            <input type="text" value={password} placeholder='password'
                onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleSubmit}>Login</button>
        </div>
    );
};

export default Login;   