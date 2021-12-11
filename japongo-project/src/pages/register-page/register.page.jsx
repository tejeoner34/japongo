import LockIcon from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
import { Paper, Grid, Button, Typography } from '@mui/material';
import './register-page.css';
import { useState } from 'react';


function Register(){

    const [t] = useTranslation('global');
    const [errorMessage, updateErrorMessage] = useState('');
    const [userExists, updateUserExists] = useState('');
    const [error, setError] = useState(false);
    const [validateEmailMessage, updateValidateEmailMessage] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(e.target.password.value === e.target.repeatedPassword.value){

           
            const options = {
                method: "POST",
                headers: {
                  "Content-type": "application/json", // aviso a mi servidor que le envio los datos en formato JSON
                },
                body: JSON.stringify({
                  // Genero el body como string
                  email: e.target.email.value, // obtengo el value de un input por su name
                  password: e.target.password.value,
                  name: e.target.name.value
                }),
              };
              // llamo al registro
              fetch("http://localhost:4567/auth/register", options)
                .then(r => {
                  r.status===201 && updateValidateEmailMessage(true);
                  r.json()})
                .then(d =>{
                  d!=='ok' && updateUserExists(t("Register.UserExists"))
                  
                }); 
                
            } else {
              // Muestro al usuario el error de que las passwords no coinciden
              updateErrorMessage(t("Register.Error"));
              setError(true);

            }
    }

    return(
      
        <Grid container item xs={12} md={5} direction="column"
            alignItems="center"
            justifyContent="center">
            <Paper sx={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', padding: 2 }} elevation={10}>
              {validateEmailMessage? (<h2>{t("Register.CheckEmail")}</h2>):(<form className='login-form' onSubmit={handleSubmit}>
                    <div className='avatar-container'>
                    <Avatar><LockIcon></LockIcon></Avatar>
                    </div>
                    <h2>{t('Register.Register')}</h2>
                    <TextField required type='email' name='email' label={t("Register.Email")} variant="outlined" />
                    <TextField required type='text' name='name' label={t("Register.Name")} variant="outlined" />
                    <TextField error={error} required type='password' name='password' label={t('Register.Password')} variant="outlined" />
                    <TextField error={error}  required type='password' name='repeatedPassword' label={t('Register.ConfirmPassword')} variant="outlined" />
                    <Typography color='red'>{errorMessage}</Typography>
                    <Typography color='red'>{userExists}</Typography>
                    <Button variant='contained' type='submit' color='primary'>{t('Register.Register')}</Button>
                    
                    {/* <Typography>{t('Login.HaveAccount')} <Link to='/register'>Sign up</Link></Typography> */}
                    </form>) }
            </Paper>
        </Grid>
    )
}

export default Register;