import { Paper, Grid, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './login-page.css';
import LockIcon from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
import { useState } from 'react'





function Login() {

    const [t, i18n] = useTranslation('global');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => { // gestiono el submit del formulario
        e.preventDefault();
        if(e.target.checkValidity()){ // compruebo que todos los campos del formulario son validos
            // genero el objeto options para llamar al login
            const options = {
                method: 'POST',
                headers:{
                    'Content-type': 'application/json' // aviso a mi servidor que le envio los datos en formato JSON
                },
                body: JSON.stringify({ // Genero el body como string
                    email: e.target.email.value, // obtengo el value de un input por su name
                    password: e.target.password.value
                })
            }
            // llamo al login
            fetch('http://localhost:4567/auth/login', options)
            .then(r => r.json())
            .then(d => console.log(d)) // aqui tendríamos el access token
        }else{
          setErrorMessage(t('Register.ErrorMessage'))
        }
       
      }




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
                    <TextField id="outlined-basic" name='email' required type='email' label={t("Register.Email")} variant="outlined" />
                    <TextField id="outlined-basic"name='password' required type='password' label={t('Register.Password')} variant="outlined" />
                    <Typography color='error'>{errorMessage}</Typography>
                    <Button variant='contained' type='submit' color='primary'>{t('Login.Access')}</Button>
                    <Typography>{t('Login.HaveAccount')} <Link to='/register'>Sign up</Link></Typography>
                </Box>


            </Paper>
        </Grid>
    )
}

export default Login;