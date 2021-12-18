import { useContext, Fragment, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { Box, Typography, Skeleton, Stack, Paper } from "@mui/material";
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
import { serverUrl } from "../../global/global-variable.js";
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export default function MyProfile() {


    const [t] = useTranslation('global');
    const [userData, updateUserData] = useContext(UserContext);
    const [control, setControl] = useState(null);
    const history = useHistory();
    const [incorrectPass, setIncorrectPass] = useState('')
    const [isLoad, setIsLoad] = useState(false);
    const [imgError, setImgError] = useState('');

    const onFavRemove = (childata) => {
        updateUserData({ ...childata })
    };

    const onAccountDelete = (e) => {
        e.preventDefault();
        const options = {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json' // aviso a mi servidor que le envio los datos en formato JSON
            },
            body: JSON.stringify({ // Genero el body como string
                email: sessionStorage.getItem('mail') ?? localStorage.getItem('mail'), // obtengo el value de un input por su name
                password: e.target.password.value
            })

        }
        fetch('http://localhost:4567/user/', options)
            .then(r => {
                if (r.ok) { history.push('/login') } else { setIncorrectPass(t("Profile.Options.IncorrectPassword")) }
                return r.json()
            })
            .then(d => console.log(d))


        const optionsDeleteAllComments = {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json' // aviso a mi servidor que le envio los datos en formato JSON
            },
            body: JSON.stringify({ // Genero el body como string
                name: sessionStorage.getItem('name') ?? localStorage.getItem('name'), // obtengo el value de un input por su name
            })

        }
        fetch('http://localhost:4567/courses', optionsDeleteAllComments)
            .then(r => console.log(r))
    };

    const onPasswordChange = (e) => {
        e.preventDefault();
        console.log(e.target.password.value)
        console.log(e.target.newPassword.value)
        const options = {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json' // aviso a mi servidor que le envio los datos en formato JSON
            },
            body: JSON.stringify({ // Genero el body como string
                email: sessionStorage.getItem('mail') ?? localStorage.getItem('mail'), // obtengo el value de un input por su name
                password: e.target.password.value,
                newPassword: e.target.newPassword.value
            })

        }
        fetch('http://localhost:4567/user/', options)
            .then(r => {
                if (r.ok) {
                    setIncorrectPass(t("Profile.Options.PasswordUpdated"));
                    setTimeout(() => {
                        handleCloseDialogPassword()
                    }, 1000)

                } else { setIncorrectPass(t("Profile.Options.IncorrectPassword")) }
                return r.json()
            })
            .then(d => console.log(d))
    }

    useEffect(() => {
        fetch('http://localhost:4567/user/', {
            headers: {
                "Authorization": sessionStorage.getItem('token') ?? localStorage.getItem('token'),
            }
        })
            .then(r => r.json())
            .then(d => {
                updateUserData({ ...d });
                setControl(true)
                setIsLoad(true)

            })
    }, [updateUserData])



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


    //import from MUI. Update password Dialog
    const [openDialogPassword, setOpenDialogPassword] = useState(false);

    const handleClickOpenPassword = () => {
        setOpenDialogPassword(true);
    };

    const handleCloseDialogPassword = () => {
        setOpenDialogPassword(false);
    };


    // dialog to edit background picture

    const [openBackgroundImgDialog, setOpenBackgroundImgDialog] = useState(false);

    const handleOpenBackgroundImgDialog = () => {
        setOpenBackgroundImgDialog(true);
    }

    const closeBackgroundImgDialog = () => {
        setOpenBackgroundImgDialog(false)
    }

    // dialog to edit avatar

    const [openAvatarImgDialog, setOpenAvatarImgDialog] = useState(false);

    const handleOpenAvatarDialog = () => {
        setOpenAvatarImgDialog(true);
    };

    const handleCloseAvatarDialog = () => {
        setOpenAvatarImgDialog(false);
        setImgError('')
    };

    const onAvatarChange = (e) => {

        e.preventDefault();

        if (e.target[0].files[0].size >= 1*1024*1024) {
            setImgError(t("Profile.ImgError"))
        } else {

            console.log(e.target[0].files[0].size);
            const formData = new FormData(e.currentTarget);
            const name = sessionStorage.getItem('name') ?? localStorage.getItem('name')
            formData.append("name", name)
            const options = {
                method: "PATCH",
                // headers: {
                //   "Content-type": "multipart/form-data", // aviso a mi servidor que le envio los datos en formato JSON
                // },
                body: formData
            };

            fetch('http://localhost:4567/user/change-avatar', options)
                .then(r => r.json())
                .then(d => {
                    updateUserData(d);
                    setOpenAvatarImgDialog(false)
                })

            setImgError('')

        }

    };

    const onBackgroundImgChange = (e) => {
        e.preventDefault();
        
 
        
            const formData = new FormData(e.currentTarget);
            const name = sessionStorage.getItem('name') ?? localStorage.getItem('name')
            formData.append("name", name)
            const options = {
                method: "PATCH",
                // headers: {
                //   "Content-type": "multipart/form-data", // aviso a mi servidor que le envio los datos en formato JSON
                // },
                body: formData
            };
    
            fetch('http://localhost:4567/user/change-background', options)
                .then(r => r.json())
                .then(d => {
                    updateUserData(d);
                    setOpenBackgroundImgDialog(false)
                })
 
        
    }
    const styleBackground = {
        backgroundImage: `url("${serverUrl}/profile-background/${userData?.profileBackgroundImg}")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    const styleAvatar = {
        backgroundImage: `url("${serverUrl}/user-avatar/${userData?.file?.filename}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };

    return (


        <Fragment>
            <Box component='div' sx={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
                <Box sx={{
                    display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    position: 'relative'
                }}>
                    {control && <div className="profile__background-img__container"
                        style={styleBackground}>
                        {/* <img src={serverUrl + `/profile-background/${userData?.profileBackgroundImg}`} alt="" /> */}
                    </div>}
                    <div className="profile__info__container">
                        <div>
                            <h1>{t("Profile.Hello")} {sessionStorage.getItem('name') ?? localStorage.getItem('name')}</h1>
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
                                    <Dialog open={openDialog} onClose={handleCloseDialog}>
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
                                    <MenuItem onClick={handleClickOpenPassword}>{t("Profile.Options.Edit")}</MenuItem>
                                    <Dialog open={openDialogPassword} onClose={handleCloseDialogPassword}>
                                        <DialogTitle>{t("Profile.Options.UpdatePass")}</DialogTitle>
                                        <form onSubmit={onPasswordChange}>
                                            <DialogContent>
                                                <DialogContentText>
                                                    {t("Profile.Options.UpdateDescription")}
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
                                                <TextField
                                                    margin="dense"
                                                    id="newPassword"
                                                    name='newPassword'
                                                    label={t("Profile.Options.NewPassword")}
                                                    type="password"
                                                    fullWidth
                                                    variant="standard"
                                                />
                                            </DialogContent>
                                            <Typography textAlign={'center'} color='red'>{incorrectPass}</Typography>
                                            <DialogActions>
                                                <Button onClick={handleCloseDialogPassword}>{t("Profile.Options.Cancel")}</Button>
                                                <Button type="submit" >{t("Profile.Options.UpdateButton")}</Button>
                                            </DialogActions>
                                        </form>
                                    </Dialog>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    {control && <div className="profile__info__img-container" style={styleAvatar}>
                        {/* <img src={serverUrl + `/user-avatar/${userData?.file?.filename}`} alt={userData?.file?.fieldname} /> */}
                    </div>}
                    <div onClick={handleOpenBackgroundImgDialog} title={t("Profile.EditBackground")} className="profile__info__img-edit-container">
                        <CameraAltIcon></CameraAltIcon>
                    </div>
                    <div onClick={handleOpenAvatarDialog} title={t("Profile.EditBackground")} className="profile__info__avatar-edit-container">
                        <CameraAltIcon></CameraAltIcon>
                    </div>
                </Box>

                {
                    !isLoad ? (
                        <Stack spacing={1}>
                            <Skeleton variant="text" />
                            <Skeleton variant="circular" width={40} height={40} />
                            <Skeleton variant="rectangular" width={210} height={118} />
                        </Stack>
                    ) : (
                        <Paper elevation={3} sx={{ padding: '1rem' }}>
                            <Box component='div'
                                display={'flex'}
                                flexDirection={'column'}
                                gap={2}
                                sx={{ alignItems: { xs: 'center' } }}

                            >
                                <Typography variant='h3'>{t("Profile.Favorite")}</Typography>
                                <ul className="profile__favorite-cards">
                                    {userData?.favs?.map((e, i) => <li key={i}><FavoriteCard onFavRemove={onFavRemove} data={e} /></li>)}
                                </ul>
                            </Box>
                        </Paper>
                    )
                }

                <Dialog open={openBackgroundImgDialog} onClose={closeBackgroundImgDialog}>
                    <DialogTitle>{t("Profile.EditBackground")}</DialogTitle>
                    <form onSubmit={onBackgroundImgChange}>
                        <DialogContent>
                            <DialogContentText>
                                {t("Profile.EditBackgroundMessage")}
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="profile-background"
                                name='profile-background'
                                label={t("Profile.EditBackground")}
                                type="file"
                                accept='image/jpg'
                                fullWidth
                                variant="standard"
                            />
                            <Typography>{imgError}</Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={closeBackgroundImgDialog}>{t("Profile.Options.Cancel")}</Button>
                            <Button type="submit" >{t("Profile.EditBackground")}</Button>
                        </DialogActions>
                    </form>
                </Dialog>
                <Dialog open={openAvatarImgDialog} onClose={handleCloseAvatarDialog}>
                    <DialogTitle>{t("Profile.EditBackground")}</DialogTitle>
                    <form onSubmit={onAvatarChange}>
                        <DialogContent>
                            <DialogContentText>
                                {t("Profile.EditBackgroundMessage")}
                            </DialogContentText>
                            <TextField
                                inputProps={{ accept: ["image/jpeg", "image/png"] }}
                                autoFocus
                                margin="dense"
                                id="avatar"
                                name="avatar"
                                label={t("Profile.EditBackground")}
                                type="file"
                                fullWidth
                                variant="standard"
                            />
                            <Typography>{imgError}</Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseAvatarDialog}>{t("Profile.Options.Cancel")}</Button>
                            <Button type="submit" >{t("Profile.EditBackground")}</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </Box>
        </Fragment>
    );


}