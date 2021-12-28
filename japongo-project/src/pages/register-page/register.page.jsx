import LockIcon from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
import { Paper, Grid, Button, Typography } from '@mui/material';
import './register-page.css';
import { useState } from 'react';
import { serverFetch } from '../../global/global-variable';


function Register() {

  const [t] = useTranslation('global');
  const [errorMessage, updateErrorMessage] = useState('');
  const [userExists, updateUserExists] = useState('');
  const [error, setError] = useState(false);
  const [validateEmailMessage, updateValidateEmailMessage] = useState(false);
  const [passwordTooShort, updatePasswordTooShort] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    if(e.target.password.value.length <= 5){
      updatePasswordTooShort('Password must be longer than 5 characters')

    }else{
      if (e.target.password.value === e.target.repeatedPassword.value) {
        const options = {
          method: "POST",
          body: formData,
        };
        fetch(`${serverFetch}auth/register`, options)
          .then(r => {
            r.status === 201 && updateValidateEmailMessage(true);
            r.json()
          })
          .then(d => {
            d !== 'ok' && updateUserExists(t("Register.UserExists"))
          });
      } else {
        updateErrorMessage(t("Register.Error"));
        setError(true);
      }
    }
    
  }

  const inputFileStyle={
    display:'flex',
    justifyContent:'center',
    paddingLeft:'4rem'
  }

  return (

    <Grid container item xs={12} md={5} direction="column"
      alignItems="center"
      justifyContent="center">
      <Paper sx={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', padding: 2 }} elevation={10}>
        {validateEmailMessage ? (<h2>{t("Register.CheckEmail")}</h2>) : (<form className='login-form' onSubmit={handleSubmit}>
          <div className='avatar-container'>
            <Avatar><LockIcon></LockIcon></Avatar>
          </div>
          <h2>{t('Register.Register')}</h2>
          <TextField required type='email' name='email' label={t("Register.Email")} variant="outlined" />
          <TextField required type='text' name='name' label={t("Register.Name")} variant="outlined" />
          <div style={inputFileStyle}>
            <label htmlFor="avatar"></label>
            <input required  type="file" name="avatar" />
          </div>
          <TextField error={error} required type='password' name='password' label={t('Register.Password')} variant="outlined" />
          <Typography color='red'>{passwordTooShort}</Typography>
          <TextField error={error} required type='password' name='repeatedPassword' label={t('Register.ConfirmPassword')} variant="outlined" />
          <Typography color='red'>{errorMessage}</Typography>
          <Typography color='red'>{userExists}</Typography>
          <Button variant='contained' type='submit' color='primary'>{t('Register.Register')}</Button>
        </form>)}
      </Paper>
    </Grid>
  )
}

export default Register;