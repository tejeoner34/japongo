import { Typography, Grid, Divider, Box } from "@mui/material";
import backgorund from '../../img/home-background.jpg';
import './home-page.css';
import { useTranslation } from 'react-i18next';



export default function HomePage(){

    const [t, i18n] = useTranslation('global');


    return(
        <Grid container justifyContent='center' flexDirection='column' alignItems='center' rowGap={3}>
            <div className='home__card'>
                <img className='home__card__img' src={backgorund} alt="" />
                <div className='home__card__background'></div>
                <Typography variant='h1' color='common.white' sx={{position: 'absolute'}}>{t("Home.H1")}</Typography>
            </div>
            <Divider sx={{padding:'10px', width:'70%',borderBottomWidth: 5,  }}/>
            <Box component='div'>
                <Typography variant= 'h2'>{t("Home.Steps.Title")}</Typography>
            </Box>
        </Grid>
    )
}