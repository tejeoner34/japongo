import { Paper, Grid, Button, Typography } from '@mui/material';
import { useHistory, Redirect } from 'react-router-dom';
import './login-page.css';
import LockIcon from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
import { useState, useContext, Fragment } from 'react';
import { AuthContext } from '../../auth/auth.context.js'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { serverFetch } from "../../global/global-variable.js";


function Login() {

    const [, updateIsAuth] = useContext(AuthContext);
    const [t] = useTranslation('global');
    const [errorMessage, setErrorMessage] = useState('');
    const [checked, setChecked] = useState(false);
    let history = useHistory();
    const isLogged = JSON.parse(sessionStorage.getItem('isAuth')) ?? JSON.parse(localStorage.getItem('isAuth')) ?? false

    const handleCheck = (e) => {
        setChecked(!checked)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.checkValidity()) {
            const options = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: e.target.email.value,
                    password: e.target.password.value
                })
            }
            fetch(`${serverFetch}auth/login`, options)
                .then(r => {
                    if (r.status !== 200) {
                        setErrorMessage(t('Register.ErrorMessage'))
                    }
                    return r.json()
                })
                .then(d => {
                    // I must add this to storage as an object
                    if (d !== 'Usuario/Contraseña erróneos' && !checked) {
                        sessionStorage.setItem('token', 'Bearer ' + d.token);
                        sessionStorage.setItem('mail', d.email);
                        sessionStorage.setItem('name', d.name);
                        sessionStorage.setItem('avatar', d.file.url)
                        updateIsAuth(true)
                        sessionStorage.setItem('isAuth', true);
                        history.push("/my-profile");
                    } else if (d !== 'Usuario/Contraseña erróneos' && checked) {
                        sessionStorage.setItem('token', 'Bearer ' + d.token);
                        sessionStorage.setItem('mail', d.email);
                        sessionStorage.setItem('name', d.name);
                        localStorage.setItem('token', 'Bearer ' + d.token);
                        localStorage.setItem('mail', d.email);
                        localStorage.setItem('name', d.name);
                        localStorage.setItem('avatar', d.file.url)
                        updateIsAuth(true)
                        sessionStorage.setItem('isAuth', true);
                        localStorage.setItem('isAuth', true);
                        history.push("/my-profile");
                    }
                });
        } else {
            setErrorMessage(t('Register.ErrorMessage'))
        }
    }


    return (
        <Fragment>
            {
                isLogged ?
                    <Redirect to='/my-profile'></Redirect>
                    :
                    <Grid container item xs={12} md={5} direction="column"
                        alignItems="center"
                        justifyContent="center">
                        <Paper sx={
                            {
                                width: '100%',
                                textAlign: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                padding: 2
                            }} elevation={10}>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                                noValidate
                                autoComplete="off"
                                onSubmit={handleSubmit}
                            >
                                <div className='avatar-container'>
                                    <Avatar><LockIcon></LockIcon></Avatar>
                                </div>
                                <h2>{t("Header.Login")}</h2>
                                <TextField id="email" name='email' required type='email' label={t("Register.Email")} variant="outlined" />
                                <TextField id="password" name='password' required type='password'
                                    label={t('Register.Password')} variant="outlined" />
                                <FormControlLabel control={<Checkbox checked={checked} onChange={handleCheck} />}
                                    label={t("Login.Remember")} />
                                <Typography color='error'>{errorMessage}</Typography>
                                <Button variant='contained' type='submit' color='primary'>{t('Login.Access')}</Button>
                                <Typography >{t('Login.HaveAccount')}</Typography>
                                <Typography sx={{ cursor: 'pointer' }}
                                    onClick={() => history.push('/register')} color='primary' >{t('Login.SignUp')}</Typography>
                                <Typography sx={{ cursor: 'pointer' }} color={'primary'}
                                    onClick={() => history.push('/forgot-password')}>{t('Login.ForgotPassword')}</Typography>
                            </Box>
                        </Paper>
                    </Grid>
            }

        </Fragment>
    )
}

export default Login;