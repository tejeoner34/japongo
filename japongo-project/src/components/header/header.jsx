import * as React from 'react';
import { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import { useTranslation } from 'react-i18next';
import SwitchComponent from '../switch/switch-component';
import MenuItem from '@mui/material/MenuItem';
import { AuthContext } from '../../auth/auth.context';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';





export default function Header(props) {

    const [t, i18n] = useTranslation('global');
    const [isAuth, updateIsAuth] = useContext(AuthContext);
    let history = useHistory();

    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickMyProfile = (event) => {
        setAnchorEl2(event.currentTarget);
    }
    const handleCloseMyProfile = () => {
        setAnchorEl2(null);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = (e)=>{
        sessionStorage.removeItem('isAuth');
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('mail');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('mail');
        updateIsAuth(false);
        history.push('login');
    };



    return (
        <Box component='div' sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ columnGap: '30px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Typography xs={12} variant='h3'>
                        JaponGo
                    </Typography>
                </Toolbar>
                <Toolbar sx={{ columnGap: '30px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography>{t("Header.Menu")}</Typography>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            sx={{ minWidth: '500px' }}
                        >
                            <MenuItem onClick={handleClose}><Link to='/schools'>{t("Header.Schools")}</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to='/accommodation'>{t("Header.Accommodation")}</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to='/courses'>{t("Header.Courses")}</Link></MenuItem>
                            <MenuItem onClick={handleClose} >{t("Header.AboutUs")}</MenuItem>
                            <MenuItem onClick={handleClose} ><Link to='/legal'>{t("Header.Legal")}</Link></MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ columnGap: '30px', display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
                        {/* <LanguageSelect /> */}
                        <select onChange={(e) => {i18n.changeLanguage(e.target.value);localStorage.setItem('lang', e.target.value)}} value={localStorage.getItem('lang')??'en'} name="lang" id="language">
                            <option value="en">EN</option>
                            <option value="jp">JP</option>
                        </select>
                        <SwitchComponent isDard={props.isDark} onThemeChange={props.onThemeChange} />
                        {isAuth ?
                            <React.Fragment>
                                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                    <Tooltip title="Account settings">
                                        <IconButton onClick={handleClickMyProfile} size="small" sx={{ ml: 2 }}>
                                            <Avatar sx={{ width: 32, height: 32 }}>{sessionStorage.getItem('name')?.charAt(0)??localStorage.getItem('name')?.charAt(0)?? ''}</Avatar>
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Menu
                                    anchorEl={anchorEl2}
                                    open={open2}
                                    onClose={handleCloseMyProfile}
                                    onClick={handleCloseMyProfile}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&:before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={()=>history.push('/my-profile')}>
                                        <Avatar /> {t("Header.Profile")}
                                    </MenuItem>
                                    
                                    <Divider />
                                    
                                    
                                    <MenuItem onClick={handleLogout}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        {t("Header.Logout")}
                                    </MenuItem>
                                </Menu>
                            </React.Fragment>
                            :
                            <Typography 
                            onClick={()=>history.push('/login')}
                            sx={{cursor:'pointer'}}>{t("Header.Login")}</Typography>

                        }
                        {/* <Button color="inherit">Login</Button> */}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}