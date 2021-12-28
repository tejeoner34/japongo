import { Grid, Typography, Box, Stack, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import aboutUsImg from '../../img/about-us.jpg';
import onlineClassImg from '../../img/online-class.jpg';
import classroomImg from '../../img/classroom.jpg';



function AboutUsPage() {

    const [t] = useTranslation('global');
    const history = useHistory();

    const styleClass = {
        backgroundImage: `url(${onlineClassImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '200px'

    }

    const styleOnline = {
        backgroundImage: `url(${classroomImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height:'200px'
    }

    return (
        <Grid container justifyContent='center' flexDirection='column' alignItems='center' rowGap={3}>
            <div className='home__banner home__banner-animation'>
                <img className='home__banner__img' src={aboutUsImg} alt="" />
                <div className='home__banner__background'></div>
                <Typography variant='h1' color='common.white' sx={{ position: 'absolute' }}>{t("Header.AboutUs")}</Typography>
            </div>
            <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap='1rem'>
                <Stack>
                    <Typography variant='h2'>{t("Header.AboutUsPage.Title")}</Typography>
                </Stack>
                <Box display={'flex'}
                    justifyContent={'center'}
                    gap='3rem'
                    flexWrap={'wrap'}>
                    <Box display={'flex'}
                        flexDirection={'column'}
                        width={'30%'}
                        sx={{minWidth:'300px',
                            border: '1px solid black'}}
                        >
                        <div style={styleClass}>

                        </div>
                        <Box display='flex'
                            flexDirection={'column'}
                            alignItems={'center'}
                            gap='1rem'
                            sx={{textAlign:'center',
                            padding:'1rem'}}>
                            <Typography variant='h5'>{t("Header.AboutUsPage.School")}</Typography>
                            <Typography>{t("Header.AboutUsPage.SchoolDescription")}</Typography>
                            <Button onClick={()=>history.push('/schools')} variant='contained'>{t("Header.AboutUsPage.SchoolButton")}</Button>
                        </Box>
                    </Box>
                    <Box display={'flex'}
                        flexDirection={'column'}
                        width={'30%'}
                        sx={{minWidth:'300px',
                                border: '1px solid black'}}>
                        <div style={styleOnline}>

                        </div>
                        <Box display='flex'
                            flexDirection={'column'}
                            alignItems={'center'}
                            gap='1rem'
                            sx={{textAlign:'center',
                            padding:'1rem'}}>
                            <Typography variant='h5'>{t("Header.AboutUsPage.OnlineClass")}</Typography>
                            <Typography>{t("Header.AboutUsPage.OnlineDescription")}</Typography>
                            <Button onClick={()=>history.push('/courses')} variant='contained'>{t("Header.AboutUsPage.OnlineButton")}</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}

export default AboutUsPage;