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
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { LangContext } from '../../context/lang-context/lang-context';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import { NotificationContext } from '../../context/notification-context/notification-context.js'
import NotificationCard from '../notification-card/notification-card';
import { Tooltip } from '@mui/material';
import { UserContext } from '../../context/user-context/user-context';


export default function Header(props) {

    const [t, i18n] = useTranslation('global');
    const [isAuth, updateIsAuth] = useContext(AuthContext);
    let history = useHistory();
    const [, updateLang] = useContext(LangContext);
    const [notification, updateNotification] = useContext(NotificationContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    const [anchorElNotifications, setAnchorElNotifications] = useState(null);
    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2)
    const openNotifications = Boolean(anchorElNotifications)
    const [userData] = useContext(UserContext);

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

    const handleClickNotifications = (event) => {
        setAnchorElNotifications(event.currentTarget);
    }

    const handleCloseNotifications = () => {
        setAnchorElNotifications(null);
    }


    const onNotificationDelete = (childata) => {
        let emptyArray = [];
        updateNotification(emptyArray.concat(childata));
    }


    const handleLogout = (e) => {
        sessionStorage.removeItem('isAuth');
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('mail');
        sessionStorage.removeItem('avatar');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('mail');
        localStorage.removeItem('avatar');
        updateIsAuth(false);
        history.push('/login');
    };


    const styleAvatar = {
        backgroundImage: `url("${userData?.file.url
            ?? sessionStorage.getItem('avatar')
            ?? localStorage.getItem('avatar')
            ?? ''}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        cursor: 'pointer'
    };


    return (
        <Box component='div' sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ columnGap: '30px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Typography sx={{ cursor: 'pointer' }} onClick={() => history.push('/japongo')} xs={12} variant='h3'>
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
                            <Link to='/japongo'><MenuItem onClick={handleClose}><Typography color='textPrimary'>{t("Header.Home")}</Typography></MenuItem></Link>
                            <Divider />
                            <Link to='/schools'><MenuItem onClick={handleClose}><Typography color='textPrimary'>{t("Header.Schools")}</Typography></MenuItem></Link>
                            <Divider />
                            <Link to='/courses'><MenuItem onClick={handleClose}><Typography color='textPrimary'>{t("Header.Courses")}</Typography></MenuItem></Link>
                            <Divider />
                            <Link to='/about-us'><MenuItem onClick={handleClose}><Typography color='textPrimary'>{t("Header.AboutUs")}</Typography></MenuItem></Link>
                            <Divider />
                            <Link to='/legal'><MenuItem onClick={handleClose} ><Typography color='textPrimary'>{t("Header.Legal")}</Typography></MenuItem></Link>
                            <Divider />
                            <Link to='/privacy-policy'><MenuItem onClick={handleClose} ><Typography color='textPrimary'>{t("Header.PrivacyPolicy")}</Typography></MenuItem></Link>
                        </Menu>
                    </Box>
                    <Box sx={{ columnGap: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* <LanguageSelect /> */}
                        <select style={{ borderRadius: '5px' }}
                            onChange={(e) => {
                                i18n.changeLanguage(e.target.value);
                                localStorage.setItem('lang', e.target.value);
                                updateLang(e.target.value)
                            }}
                            value={localStorage.getItem('lang') ?? 'en'}
                            name="lang" id="language"
                        >
                            <option value="en">EN</option>
                            <option value="jp">JP</option>
                        </select>
                        <SwitchComponent isDard={props.isDark} onThemeChange={props.onThemeChange} />
                        {isAuth

                            ?
                            <React.Fragment>
                                <Box>
                                    <Tooltip title="Notifications">
                                        <Badge sx={{ cursor: 'pointer' }} onClick={handleClickNotifications}
                                            badgeContent={notification?.length} color="error">
                                            <NotificationsIcon />
                                        </Badge>
                                    </Tooltip>
                                    <Menu
                                        anchorEl={anchorElNotifications}
                                        open={openNotifications}
                                        onClose={handleCloseNotifications}
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




                                        {
                                            notification?.length <= 0
                                             ?
                                            <Box>
                                                <Typography sx={{padding:'.5rem'}}>No notifications</Typography>
                                            </Box>
                                            :
                                            notification?.map((e, i) => (
                                                <MenuItem key={i} onClick={() => {

                                                    history.push(`/course/${e.course}`);
                                                    handleCloseNotifications()
                                                }
                                                }>
                                                    {/* <Typography>{e.from}</Typography> */}
                                                    <NotificationCard onNotificationDelete={onNotificationDelete} data={e}></NotificationCard>
                                                    <Divider />
                                                </MenuItem>
                                            ))
                                        }

                                    </Menu>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                    <div onClick={handleClickMyProfile} title={t("Header.AccountSettings")} style={styleAvatar}>
                                    </div>
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
                                    <MenuItem onClick={() => history.push('/my-profile')}>
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
                                onClick={() => history.push('/login')}
                                sx={{ cursor: 'pointer' }}>{t("Header.Login")}</Typography>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}