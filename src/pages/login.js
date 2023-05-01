import React, { useState } from 'react';
import { Paper, Typography, TextField, Button } from '@material-ui/core';
import { login } from '../apis';
import { useNavigate } from 'react-router-dom';


export function LoginScreen() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Handle login form submission here
        if (email === '' || password === '') {
            setError('Please enter an email and password.');
        } else {
            setError('');
            // Call API to handle login
            let paylaod = {
                email: email,
                password: password
            }
            let res = await login(paylaod)
            console.log(res, "res")
            if (res?.token) {
                localStorage.setItem('token', res.token)
                navigate('/quiz')
            }
        }
    };

    return (

        <Paper className='paper'>
            <Typography variant="h4" className='title'>
                Login
            </Typography>
            {error && <Typography className='error'>{error}</Typography>}
            <form className='form' onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    required
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    required
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}

                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Login
                </Button>
            </form>
        </Paper>
    );
}

export default LoginScreen;
