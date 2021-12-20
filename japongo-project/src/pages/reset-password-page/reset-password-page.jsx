import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom"; 
import { useTranslation } from 'react-i18next';
import { Typography, Grid, Box, Paper, TextField, Button } from "@mui/material";



function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function ResetPassword() {

    const [t] = useTranslation('global');
    const query = useQuery();
    const [errorMessage, updateErrorMessage] = useState('');
    const [error, setError] = useState(false);
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const token = query.get("token");

        if(e.target.password.value === e.target.repeatedPassword.value && token){
           
            const options = {
                method: "PATCH",
                headers: {
                    'Content-type': 'application/json' // aviso a mi servidor que le envio los datos en formato JSON
                },
                body: JSON.stringify({
                  password: e.target.password.value,
                }),
              };
              // llamo al registro
              fetch(`http://localhost:4567/auth/resset-password?token=${token}`, options)
                .then(r=>{
                    if(r.ok)history.push('/login')
                    if(!r.ok)updateErrorMessage(t("ForgotPassword.Error"))
                })
                
                
            } else {
              // Muestro al usuario el error de que las passwords no coinciden
              updateErrorMessage(t("Register.Error"));
              setError(true);

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
                    <Typography>{t("ResetPassword.Message")}</Typography>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        name='password'
                        label={t('Register.Password')}
                        type="password"
                        fullWidth
                        variant="standard"
                        required
                        error={error}
                    />
                    <TextField
                        margin="dense"
                        id="repeatedPassword"
                        name='repeatedPassword'
                        label={t('Register.ConfirmPassword')}
                        type="password"
                        fullWidth
                        variant="standard"
                        required
                        error={error}
                    />
                    <Typography>{errorMessage}</Typography>
                    <Button variant='contained' type='submit' color='primary'>{t('ResetPassword.UpdatePassword')}</Button>
                </Box>


            </Paper>
        </Grid>

    );
}

export default ResetPassword;