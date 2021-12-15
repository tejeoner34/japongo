import { Typography, Grid, Divider, Box, Stack } from "@mui/material";
import backgorund from '../../img/home-background.jpg';
import StudentsImg from '../../img/home-students.jpg';
import './home-page.css';
import { useTranslation } from 'react-i18next';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import SchoolCard from "../../components/cards/school-card/school-card";
import ReviewsBanner from '../../img/home-reviews-banner.jpg';
import OnlineCourseCard from "../../components/cards/online-course-card/online-course-card";
import AccommodationCard from "../../components/cards/accommodation-card/accommodation-card";
import ReviewCard from "../../components/reviews-card/reviews-card";
import ReviewCardSlider from "../../components/review-card-slider/review-card-slider";
import { useEffect, useState } from "react";

export default function HomePage() {

    useEffect(()=>{
        fetch('http://localhost:4567/reviews/')
        .then(r=>r.json())
        .then(d=>{
            setReviews(d)
        })
    },[]);

    const [reviews, setReviews] = useState(null)

    const [t] = useTranslation('global');


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
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} rowGap={4}>
                <SchoolCard/>
                <OnlineCourseCard/>
                <AccommodationCard/>
            </Stack>
            <Divider sx={{ padding: '10px', width: '70%', borderBottomWidth: 2, }} />
            <div className='home__card'>
                <img className='home__card__img' src={ReviewsBanner} alt="Robot" />
                <div className='home__card__background'></div>
                <Typography variant='h1' color='common.white' sx={{ position: 'absolute' }}>{t("Home.Reviews.Banner")}</Typography>
            </div>
            <Stack direction={{ xs: 'row', sm: 'row' }} spacing={2} rowGap={4} sx={{overflowX:'hidden'}}>
                {reviews&&(reviews?.map((e,i)=> <ReviewCard key={i} data={e}/>))}
            </Stack>

            <Stack>
                {reviews&&<ReviewCardSlider data={reviews}/>}
            </Stack>

        </Grid>
    )
}