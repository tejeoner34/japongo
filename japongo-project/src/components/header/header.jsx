import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import { useTranslation } from 'react-i18next';
import SwitchComponent from '../switch/switch-component';
import MenuItem from '@mui/material/MenuItem';




export default function Header(props) {

    const [t, i18n] = useTranslation('global');

    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
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
                    <Box sx={{display:'flex', alignItems:'center'}}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography>Menu</Typography>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            sx={{minWidth:'500px'}}
                        >
                            <MenuItem onClick={handleClose}><Link to='/escuelas'>Escuelas</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to='/alojamientos'>Alojamiento</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to='/login'>Login</Link></MenuItem>
                            <MenuItem onClick={handleClose} >Sobre Nosotros</MenuItem>
                            <MenuItem onClick={handleClose} ><Link to='/legal'>Legal</Link></MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ columnGap: '30px', display: 'flex', justifyContent: 'space-between' }}>
                        {/* <LanguageSelect /> */}
                        <select onChange={(e) => i18n.changeLanguage(e.target.value)} name="lang" id="language">
                            <option value="en">EN</option>
                            <option value="jp">JP</option>
                        </select>
                        <SwitchComponent isDard={props.isDark} onThemeChange={props.onThemeChange} />

                        <Button color="inherit">Login</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}