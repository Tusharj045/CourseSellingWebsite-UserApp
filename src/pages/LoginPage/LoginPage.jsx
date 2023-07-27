import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { Card, TextField, Typography, Checkbox, FormControlLabel, Button, Link, Alert, AlertTitle, Snackbar, selectClasses } from '@mui/material'
import { LockOutlined } from '@mui/icons-material';

import apiLogic from '../../apiLogic/apiLogic';

function LoginPage() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const rememberRef = useRef(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [message, setMessage] = useState('Some Error');
    const [severity, setSeverity] = useState('success');
    const navigate = useNavigate();


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackBar(false);
    };

    const login = async () => {
        console.log(apiLogic)
        const result = await apiLogic.loginUser(emailRef.current.value, passwordRef.current.value, rememberRef.current.checked);
        setMessage(result.message)
        setSeverity(result.severity);
        setOpenSnackBar(true);
        if (result.severity === 'success') {
            console.log('logged in')
            navigate('/courses')
        }
    }

    return (
        <div className={styles.loginPage}>
            <Card className={styles.container}>
                <LockOutlined />
                <Typography
                    component="h1"
                    variant="h5"
                    gutterBottom={true}

                > Sign In
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    inputRef={emailRef}
                />
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    type='password'
                    required
                    fullWidth
                    inputRef={passwordRef}
                />
                <div className={styles.inputBox}>
                    <FormControlLabel
                        inputRef={rememberRef}
                        checked={true}
                        control={<Checkbox />}
                        label="Remember Me"
                    />
                </div>
                <Button
                    margin=""
                    variant="contained"
                    size={'large'}
                    fullWidth
                    onClick={login}>
                    Sign In
                </Button>

                <br />
                <Typography variant="subtitle1" >Don't have an account? <Link href="/signup" underline="hover">
                    {'Sign Up'}
                </Link>
                </Typography>
            </Card>
            <Snackbar open={openSnackBar} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default LoginPage
