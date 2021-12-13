import Avatar from '@mui/material/Avatar';
import { Paper, Grid, Button, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';



export default function ForgotPasswordPage() {

    const [errorMessage, setErrorMessage] = useState('');
    const [emailSentMessage, setEmailSentMessage] = useState('')

    const submitEmail = (e) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: e.target.email.value,
            })
        }
        fetch('http://localhost:4567/auth/forgot-password', options)
            .then(r => {
                if (!r.ok) {
                    setErrorMessage(t('ForgotPassword.EmailError'))
                }
                return r.json()
            })
            .then(d => {
                if (d === 'ok') {
                    setEmailSentMessage(t("ForgotPassword.EmailSent"))
                }
            })
    }



    const [t] = useTranslation('global');

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
                    onSubmit={submitEmail}

                >
                    <div className='avatar-container'>
                        <Avatar><LockIcon></LockIcon></Avatar>
                    </div>
                    <h2>{t('ForgotPassword.Title')}</h2>
                    <Typography>{t('ForgotPassword.Message')}</Typography>
                    <TextField id="email" name='email' required type='email' label={t('ForgotPassword.Email')} variant="outlined" />
                    <Typography color='error'>{errorMessage}</Typography>
                    <Typography color='error'>{emailSentMessage}</Typography>
                    <Button variant='contained' type='submit' color='primary'>{t('ForgotPassword.SendEmail')}</Button>
                </Box>


            </Paper>
        </Grid>
    )
}