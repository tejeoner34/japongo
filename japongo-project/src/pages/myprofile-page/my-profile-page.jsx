import {useContext, Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { userContext } from "../../context/user-context/user-context.js";
import FavoriteCard from "../../components/favorite-card/favorite-card.jsx";
import './my-profile-page.css'

export default function MyProfile(){

    const [t] = useTranslation('global');
    const [userData, updateUserData] = useContext(userContext);
    
    const onFavRemove = (childata)=>{
        updateUserData({...childata})
    }

   
    return(
        <Fragment>
        <h1>{t("Profile.Hello")} {userData?.name}</h1>

        <Box component='div'>
            <Typography variant='h3'>{t("Profile.Favorite")}</Typography>
            <ul className="profile__favorite-cards">
                {userData?.favs?.map((e,i)=> <li key={i}><FavoriteCard onFavRemove={onFavRemove}  data={e}/></li>)}
            </ul>
        </Box>
        </Fragment>
    )
}