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
import HomePage from './pages/home-page/home-page';
import LegalPage from './pages/legal-page/legal.page';
import PrivacyPolicyPage from './pages/privacy-policy-page/privacy-policy-page';
import ValidateEmail from './pages/validation-page/validate-email';
import MyProfile from './pages/myprofile-page/my-profile-page';
import PrivateRoute from './auth/privateroute';
import AuthProvider from './auth/authprovider';
import AboutUsPage from './pages/about-us-page/about-us-page';
import CoursesPage from './pages/courses-page/courses-page';
import CourseDetailPage from './pages/course-detail-page/course-detail-page';
import Footer from './components/footer/footer';
import UserProvider from './context/user-context/user-provider';
import ForgotPasswordPage from './pages/forgot-password-page/forgot-password-page';
import ResetPassword from './pages/reset-password-page/reset-password-page';
import SchoolDetailPage from './pages/school-detail-page/school-detail-page';
import ScrollToTop from './components/scrollToTop.js';
import LangProvider from './context/lang-context/lang-provider';
import NotificationProvider from './context/notification-context/notification-provider'

function App() {


  const [isDark, setDark] = useState(JSON.parse(sessionStorage.getItem('isDark'))??false);

  const onThemeChange = () => {
    setDark(()=>{
      sessionStorage.setItem('isDark', !isDark)
      return !isDark
    });
  }

  return (
    <AuthProvider value={sessionStorage.getItem('isAuth')??localStorage.getItem('isAuth')??false}>
      <ThemeProvider theme={isDark===true ? darkTheme : theme}>
      <UserProvider value={null}>
        <NotificationProvider value={null}>
        <BrowserRouter>
          <Paper sx={{ borderRadius: "0" }} style={{ minHeight: '100vh' }}>
            <Grid container direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <LangProvider value={localStorage.getItem('lang')??'en'}>
              <Grid item container xs={12}>
                <Header isDark={isDark} onThemeChange={onThemeChange} />
              </Grid>
              <ScrollToTop />
              <main>
              <Switch>
                <Route path='/schools'>
                  <EscuelasPage></EscuelasPage>
                </Route>
                <Route path='/school/:id'>
                  <SchoolDetailPage></SchoolDetailPage>
                </Route>
                <Route path='/accommodation'>
                  <AlojamientoPage></AlojamientoPage>
                </Route>
                <Route path='/login'>
                  <Login></Login>
                </Route>
                <Route path='/forgot-password'>
                  <ForgotPasswordPage></ForgotPasswordPage>
                </Route>
                <Route path='/reset-password'>
                  <ResetPassword></ResetPassword>
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
                <Route path='/privacy-policy'>
                  <PrivacyPolicyPage></PrivacyPolicyPage>
                </Route>
                <Route path='/about-us'>
                  <AboutUsPage></AboutUsPage>
                </Route>
                <Route exact path='/'>
                  <HomePage></HomePage>
                </Route>
                <PrivateRoute path='/my-profile'>
                  <MyProfile></MyProfile>
                </PrivateRoute>
                <PrivateRoute path='/courses'>
                  <CoursesPage/>
                </PrivateRoute>
                <PrivateRoute path='/course/:id'>
                  <CourseDetailPage/>
                </PrivateRoute>
              </Switch>
              </main>
              </LangProvider>
              <Footer></Footer>
            </Grid>
          </Paper>
        </BrowserRouter>
        </NotificationProvider>
        </UserProvider>

      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
