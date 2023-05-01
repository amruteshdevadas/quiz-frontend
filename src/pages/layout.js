import { Link, Outlet, useNavigate } from "react-router-dom"
import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export function Layout() {

    const navigate = useNavigate()
    let token = localStorage.getItem('token')
    useEffect(() => {
        if (!token) navigate('/login')
    }, [token])
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Quiz App
                        </Typography>
                        <Button
                            color="inherit"
                            onClick={() => navigate('/quiz-results')}>
                            ShowResults</Button>

                        {!token && <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>}
                        {token && <Button color="inherit" onClick={() => {
                            localStorage.removeItem('token')
                            navigate('/login')
                        }}>Logout</Button>
                        }

                    </Toolbar>
                </AppBar>
            </Box>
            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}

            <Outlet />
        </div>
    );
}