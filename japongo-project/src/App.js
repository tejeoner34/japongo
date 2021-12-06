import './App.css';
import { useState } from 'react';
import { theme, darkTheme } from './assets/theme';
import { ThemeProvider } from '@mui/material/styles';
import { Paper, Grid } from '@mui/material';
import Header from './components/header/header.jsx';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EscuelasPage from './pages/academias-page/academias-page';
import AlojamientoPage from './pages/alojamiento-page/alojamiento-page';
import Login from './pages/login-page/login-page';
import Register from './pages/register-page/register.page';
import SobreNosotros from './pages/sobre-nosotros-page/sobre.nosotros';
import LegalPage from './pages/legal-page/legal.page';
import { useTranslation } from 'react-i18next';
import ValidateEmail from './pages/validation-page/validate-email';
import MyProfile from './pages/myprofile-page/my-profile-page';
import PrivateRoute from './auth/privateroute';
import AuthProvider from './auth/authprovider';



function App() {




  const [t] = useTranslation('global');
  const [isDark, setDark] = useState(false);

  const onThemeChange = () => {
    setDark(!isDark);
  }



  return (
    <AuthProvider value={false}>
    <ThemeProvider theme={isDark ? darkTheme : theme}>
      <BrowserRouter>
        <Paper sx={{ borderRadius: "0" }} style={{ minHeight: '100vh' }}>
          <Grid container direction="column"
            alignItems="center"
            justifyContent="center">
            <Grid item container xs={12}>
              <Header isDark={isDark} onThemeChange={onThemeChange} />
            </Grid>
            <Switch>
              <Route path='/escuelas'>
                <EscuelasPage></EscuelasPage>
              </Route>
              <Route path='/alojamientos'>
                <AlojamientoPage></AlojamientoPage>
              </Route>
              <Route path='/login'>
                <Login></Login>
              </Route>
              <Route path="/validate-mail">
                <ValidateEmail></ValidateEmail>
              </Route>
              <Route path='/register'>
                <Register></Register>
              </Route>
              <Route path='/legal'>
                <LegalPage></LegalPage>
              </Route>
              <PrivateRoute path='/my-profile'>
                <MyProfile></MyProfile>
              </PrivateRoute>
              <Route path='/'>
                <h1>{t('Header.Hello-World')}</h1>
              </Route>
            </Switch>

          </Grid>
        </Paper>
      </BrowserRouter>
    </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
