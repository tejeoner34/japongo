import './App.css';
import { useState } from 'react';
import { theme, darkTheme } from './assets/theme';
import { ThemeProvider } from '@mui/material/styles';
import { Paper, Grid } from '@mui/material';
import Header from './components/header/header.jsx';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import EscuelasPage from './pages/academias-page/academias-page';
import AlojamientoPage from './pages/alojamiento-page/alojamiento-page';
import Login from './pages/login-page/login-page';
import Register from './pages/register-page/register.page';
import SobreNosotros from './pages/sobre-nosotros-page/sobre.nosotros';
import LegalPage from './pages/legal-page/legal.page';


function App() {



  const [isDark, setDark] = useState(false);

  const onThemeChange = () => {
    setDark(!isDark);
  }



  return (
    <ThemeProvider theme={isDark ? darkTheme : theme}>
      <BrowserRouter>
        <Paper sx={{ borderRadius: "0" }} style={{ minHeight: '100vh' }}>
          <Grid container>
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
              <Route path='/register'>
                <Register></Register>
              </Route>
              <Route path='/legal'>
                <LegalPage></LegalPage>
              </Route>
              <Route path='/'>
                <h1>Hello Final Project</h1>
              </Route>
            </Switch>

          </Grid>
        </Paper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
