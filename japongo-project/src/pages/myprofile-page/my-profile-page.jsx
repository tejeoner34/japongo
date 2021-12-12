import { useContext, Fragment, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/user-context/user-context.js";
import FavoriteCard from "../../components/favorite-card/favorite-card.jsx";
import './my-profile-page.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';





// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`full-width-tabpanel-${index}`}
//             aria-labelledby={`full-width-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `full-width-tab-${index}`,
//         'aria-controls': `full-width-tabpanel-${index}`,
//     };
// }





export default function MyProfile() {

    //material ui imports

    // const theme = useTheme();
    // const [value, setValue] = useState(0);
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    // const handleChangeIndex = (index) => {
    //     setValue(index);
    // };

    //


    const [t] = useTranslation('global');
    const [userData, updateUserData] = useContext(UserContext);
    const history = useHistory();
    const [incorrectPass, setIncorrectPass] = useState('')

    const onFavRemove = (childata) => {
        updateUserData({ ...childata })
    };

    const onAccountDelete = (e) => {
        e.preventDefault();
        console.log(e.target.password.value)
        const options = {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json' // aviso a mi servidor que le envio los datos en formato JSON
            },
            body: JSON.stringify({ // Genero el body como string
                email: sessionStorage.getItem('mail'), // obtengo el value de un input por su name
                password: e.target.password.value
            })

        }

        fetch('http://localhost:4567/user/', options)
            .then(r => {
                if (r.ok) { history.push('/login') } else { setIncorrectPass(t("Profile.Options.IncorrectPassword")) }
                return r.json()
            })
            .then(d => console.log(d))


    }

    useEffect(() => {
        fetch('http://localhost:4567/user/', {
            headers: {
                "Authorization": sessionStorage.getItem('token'),
            }
        })
            .then(r => r.json())
            .then(d => updateUserData({ ...d }))
    }, [])



    //import from MUI. Options button
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //import from MUI. Delete Dialog

    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };



    return (

        // <Grid item container justifyContent='center' flexDirection='column' alignItems='center' rowGap={3}>
        //     <h1>{t("Profile.Hello")} {sessionStorage.getItem('name')}</h1>
        //     <Box sx={{ bgcolor: 'background.paper', width: 500 }}>


        //         <AppBar position="static">
        //             <Tabs
        //                 value={value}
        //                 onChange={handleChange}
        //                 indicatorColor="secondary"
        //                 textColor="inherit"
        //                 variant="fullWidth"
        //                 aria-label="full width tabs example"
        //             >
        //                 <Tab label={t("Profile.Favorite")} {...a11yProps(0)} />
        //                 <Tab label="Item Two" {...a11yProps(1)} />
        //                 <Tab label="Item Three" {...a11yProps(2)} />
        //             </Tabs>
        //         </AppBar>
        //         <SwipeableViews
        //             axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        //             index={value}
        //             onChangeIndex={handleChangeIndex}
        //         >
        //             <Box value={value} index={0} dir={theme.direction}>
        //                 <div className="profile__favorite-cards">
        //                     {userData?.favs?.map((e, i) => <li key={i}><FavoriteCard onFavRemove={onFavRemove} data={e} /></li>)}
        //                 </div>
        //             </Box>
        //             <TabPanel value={value} index={1} dir={theme.direction}>
        //                 Item Two
        //             </TabPanel>
        //             <TabPanel value={value} index={2} dir={theme.direction}>
        //                 Item Three
        //             </TabPanel>
        //         </SwipeableViews>
        //     </Box>
        // </Grid>
        <Fragment>
            <Box component='div' sx={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '90%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2rem', width: '90%', alignItems: 'end', justifyContent: 'space-between' }}>
                    <h1>{t("Profile.Hello")} {sessionStorage.getItem('name')}</h1>
                    <div>
                        <Button
                            id="demo-positioned-button"
                            aria-controls="demo-positioned-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            {t("Profile.Options.Button")}
                        </Button>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={handleClickOpen}>{t("Profile.Options.Delete")}</MenuItem>
                            <Dialog  open={openDialog} onClose={handleCloseDialog}>
                                <DialogTitle>{t("Profile.Options.Delete")}</DialogTitle>
                                <form onSubmit={onAccountDelete}>
                                <DialogContent>
                                    <DialogContentText>
                                    {t("Profile.Options.Description")}
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="password"
                                        name='password'
                                        label={t("Register.Password")}
                                        type="password"
                                        fullWidth
                                        variant="standard"
                                    />
                                </DialogContent>
                                <Typography textAlign={'center'} color='red'>{incorrectPass}</Typography>
                                <DialogActions>
                                    <Button onClick={handleCloseDialog}>{t("Profile.Options.Cancel")}</Button>
                                    <Button type="submit" >{t("Profile.Options.DeleteAccount")}</Button>
                                </DialogActions>
                                </form>
                            </Dialog>
                            <MenuItem onClick={handleClose}>{t("Profile.Options.Edit")}</MenuItem>
                        </Menu>
                    </div>

                </Box>
                <Box component='div'>
                    <Typography variant='h3'>{t("Profile.Favorite")}</Typography>
                    <ul className="profile__favorite-cards">
                        {userData?.favs?.map((e, i) => <li key={i}><FavoriteCard onFavRemove={onFavRemove} data={e} /></li>)}
                    </ul>
                </Box>
            </Box>
        </Fragment>
    );


}