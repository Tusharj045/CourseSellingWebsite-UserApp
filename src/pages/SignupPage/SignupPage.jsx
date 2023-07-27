import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { Card, TextField, Typography, Checkbox, FormControlLabel, Button, Link, Alert, AlertTitle, Snackbar } from '@mui/material'
import { LockOutlined } from '@mui/icons-material';

import apiLogic from '../../apiLogic/apiLogic';

const SignupPage = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [message, setMessage] = useState('Some Error');
    const [severity, setSeverity] = useState('success');
    const navigate = useNavigate()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackBar(false);
    };

    const login = async () => {
        console.log(apiLogic)
        const result = await apiLogic.signupUser(nameRef.current.value, emailRef.current.value, passwordRef.current.value);
        setMessage(result.message);
        setSeverity(result.severity);
        setOpenSnackBar(true);
        if (result.severity === 'success') {
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

                > Sign Up
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    inputRef={nameRef}
                />
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
                <br />
                <Button
                    margin=""
                    variant="contained"
                    size={'large'}
                    fullWidth
                    onClick={login}>
                    Sign Up
                </Button>
                <br />
                <Typography variant="subtitle1" >Already a member! <Link href="/login" underline="hover">
                    {'Login'}
                </Link>
                </Typography>
            </Card>
            <Snackbar open={openSnackBar} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
  )
}

export default SignupPage
