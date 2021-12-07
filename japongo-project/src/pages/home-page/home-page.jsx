import { Typography, Grid, Divider, Box, Stack } from "@mui/material";
import backgorund from '../../img/home-background.jpg';
import StudentsImg from '../../img/home-students.jpg';
import './home-page.css';
import { useTranslation } from 'react-i18next';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import SchoolCard from "../../components/cards/school-card/school-card";


export default function HomePage() {

    const [t, i18n] = useTranslation('global');


    return (
        <Grid container justifyContent='center' flexDirection='column' alignItems='center' rowGap={3}>
            <div className='home__banner'>
                <img className='home__banner__img' src={backgorund} alt="" />
                <div className='home__banner__background'></div>
                <Typography variant='h1' color='common.white' sx={{ position: 'absolute' }}>{t("Home.H1")}</Typography>
            </div>
            <Divider sx={{ padding: '10px', width: '70%', borderBottomWidth: 2, }} />
            <Box component='div' display='flex' flexDirection='column' rowGap={2} sx={{ padding: '20px', maxWidth:'900px' }}>
                <Box>
                    <Typography fontWeight={500} variant='h2'>{t("Home.Steps.Title")}</Typography>
                </Box>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} rowGap={4}>
                    <Stack direction='row'>
                        <LooksOneIcon color='primary' sx={{ fontSize: 40 }} />
                        <Stack>
                            <Typography fontWeight={600}>{t("Home.Steps.One.Title")}</Typography>
                            <Typography>{t("Home.Steps.One.Body")}</Typography>
                        </Stack>
                    </Stack>
                    <Stack direction='row'>
                        <LooksTwoIcon color='primary' sx={{ fontSize: 40 }} />
                        <Stack>
                            <Typography fontWeight={600}>{t("Home.Steps.Two.Title")}</Typography>
                            <Typography>{t("Home.Steps.Two.Body")}</Typography>
                        </Stack>
                    </Stack>
                    <Stack direction='row'>
                        <Looks3Icon color='primary' sx={{ fontSize: 40 }} />
                        <Stack>
                            <Typography fontWeight={600}>{t("Home.Steps.Three.Title")}</Typography>
                            <Typography>{t("Home.Steps.Three.Body")}</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
            <Divider sx={{ padding: '10px', width: '70%', borderBottomWidth: 2, }} />

            <div className='home__card'>
                <img className='home__card__img' src={StudentsImg} alt="" />
                <div className='home__card__background'></div>
                <Typography variant='h1' color='common.white' sx={{ position: 'absolute' }}>{t("Home.FirstStep.Banner")}</Typography>
            </div>
            <Divider sx={{ padding: '10px', width: '70%', borderBottomWidth: 2, }} />
            <Stack>
                <SchoolCard/>
            </Stack>

        </Grid>
    )
}