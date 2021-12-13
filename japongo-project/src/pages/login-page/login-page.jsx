import { Paper, Grid, Button, Typography } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import './login-page.css';
import LockIcon from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
import { useState, useContext } from 'react';
import { AuthContext } from '../../auth/auth.context.js'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Login() {

    const [, updateIsAuth] = useContext(AuthContext);
    const [t] = useTranslation('global');
    const [errorMessage, setErrorMessage] = useState('');
    const [checked, setChecked] = useState(false);
    let history = useHistory();

    const handleCheck = (e)=>{
        setChecked(!checked)
    }

    const handleSubmit = (e) => { // gestiono el submit del formulario
        e.preventDefault();
        if (e.target.checkValidity()) { // compruebo que todos los campos del formulario son validos
            // genero el objeto options para llamar al login
            const options = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json' // aviso a mi servidor que le envio los datos en formato JSON
                },
                body: JSON.stringify({ // Genero el body como string
                    email: e.target.email.value, // obtengo el value de un input por su name
                    password: e.target.password.value
                })
            }

            fetch('http://localhost:4567/auth/login', options)
                .then(r => {


                    if (r.status !== 200) {
                        setErrorMessage(t('Register.ErrorMessage'))
                    }
                    return r.json()
                })
                .then(d => {
                    if (d !== undefined && !checked) {
                        sessionStorage.setItem('token', 'Bearer ' + d.token);
                        sessionStorage.setItem('mail', d.email);
                        sessionStorage.setItem('name', d.name);
                        updateIsAuth(true)
                        sessionStorage.setItem('isAuth', true);
                        history.push("/courses");
                    }else if(d !== undefined && checked){
                        sessionStorage.setItem('token', 'Bearer ' + d.token);
                        sessionStorage.setItem('mail', d.email);
                        sessionStorage.setItem('name', d.name);
                        localStorage.setItem('token', 'Bearer ' + d.token);
                        localStorage.setItem('mail', d.email);
                        localStorage.setItem('name', d.name);
                        updateIsAuth(true)
                        sessionStorage.setItem('isAuth', true);
                        localStorage.setItem('isAuth', true);
                        history.push("/courses");
                    }
                });

        } else {
            setErrorMessage(t('Register.ErrorMessage'))
        }

    }

    //   const onValidation = async (e)=>{
    //      fetch('http://localhost:4567/user/',{
    //         headers:{
    //             "Authorization": localStorage.getItem('token'),
    //         }
    //     }).then(r=> {
    //         return r.ok;

    //     })

    //   }


    return (
        <Grid container item xs={12} md={5} direction="column"
            alignItems="center"
            justifyContent="center">
            <Paper sx={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', padding: 2 }} elevation={10}>


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
                    <h2>Login</h2>
                    <TextField id="email" name='email' required type='email' label={t("Register.Email")} variant="outlined" />
                    <TextField id="password" name='password' required type='password' label={t('Register.Password')} variant="outlined" />
                    <FormControlLabel control={<Checkbox checked={checked} onChange={handleCheck} />} label={t("Login.Remember")} />
                    <Typography color='error'>{errorMessage}</Typography>
                    <Button variant='contained' type='submit' color='primary'>{t('Login.Access')}</Button>
                    <Typography>{t('Login.HaveAccount')} <Link to='/register'>{t('Login.SignUp')}</Link></Typography>
                    <Typography><Link to='/forgot-password'>{t('Login.ForgotPassword')}</Link></Typography>
                </Box>


            </Paper>
        </Grid>
    )
}

export default Login;