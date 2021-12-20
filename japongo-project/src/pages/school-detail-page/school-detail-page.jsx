import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Box, Grid, Typography, Divider, Paper, TextField, Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import WifiIcon from '@mui/icons-material/Wifi';
import WorkIcon from '@mui/icons-material/Work';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import { useTranslation } from 'react-i18next';
import { serverUrl } from '../../global/global-variable';
import './school-detail-page.css';
import AccommodationMap from '../../components/map-component/map-component-accommodation';




export default function SchoolDetailPage() {


    const [school, updateSchool] = useState(null);
    const [accommodations, updateAcommodations] = useState([]);
    const [infoSentMessage, updateInfoSentMessage] = useState('');
    const { id } = useParams();
    const [t] = useTranslation('global');

    useEffect(() => {
        fetch(`http://localhost:4567/schools/school?id=${id}`)
            .then(r => r.json())
            .then(d => {
                updateSchool({ ...d });
                fetch(`http://localhost:4567/accommodation?lat=${d.lat}&lon=${d.lon}`)
                .then(r => r.json())
                .then(d => updateAcommodations(oldvalue => oldvalue.concat(d)))
            })

    }, [id]);

    const handleInfoSubmit = (e) => {
        e.preventDefault();
        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({

                email: e.target.email.value,
                name: e.target.name.value,
                gender: e.target.gender.value,
                age: e.target.age.value,
                userComment: e.target.userComment.value,
                token: id
            })
        }
        fetch('http://localhost:4567/info', options)
            .then(r => {
                if (r.ok) updateInfoSentMessage(t("SchoolDetail.Message"));
                return r.json()
            })
    }

    return (
        <Grid container justifyContent='center' flexDirection='column' alignItems='center' rowGap={4}>
            <div className='home__banner' style={{ maxHeight: '300px' }}>
                {school && <img className='home__banner__img' src={serverUrl + `/school/${school?.img?.banner}`} alt={school?.img?.banner} />}
                <div className='home__banner__background'></div>
                <Typography variant='h1' color='common.white' sx={{ position: 'absolute',marginLeft:'1rem',marginRight:'1rem', textAlign:'center' }}>{school?.name}</Typography>
            </div>
            <Box className='introduction-container' component='div'
                display={'flex'}
                gap={'1rem'}
                maxWidth={'700px'}
                padding={'1rem'}
            >
                <Box
                    xs={12}
                    width={'30%'}
                    minWidth={'200px'}
                >
                    {school && <img style={{ width: '100%', borderRadius: '50%' }} src={serverUrl + `/school/${school?.img?.teacher}`} alt={school?.img?.banner} />}
                </Box>
                <Box
                    width={'70%'}
                    display={'flex'}
                    flexDirection={'column'}
                    gap={'1rem'}
                    textAlign={'center'}
                >
                    <Typography variant='h4'>{t("SchoolDetail.Introduction")}</Typography>
                    <Typography>{school?.introduction}</Typography>
                </Box>
            </Box>
            <Box className='introduction-container' component='div'
                display={'flex'}
                gap={'1rem'}
                maxWidth={'700px'}
                padding={'1rem'}
            >
                <Box
                    xs={12}
                    width={'30%'}
                    minWidth={'200px'}
                >
                    {school && <img style={{ width: '100%', borderRadius: '50%' }} src={serverUrl + `/school/${school?.img?.description}`} alt={school?.img?.banner} />}
                </Box>
                <Box
                    width={'70%'}
                    display={'flex'}
                    flexDirection={'column'}
                    gap={'1rem'}
                    textAlign={'center'}
                >
                    <Typography variant='h4'>{t("SchoolDetail.Description")}</Typography>
                    <Typography>{school?.description}</Typography>
                </Box>
            </Box>
            <div className='school-detail__accordion'>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        display='flex'

                    >
                        <Typography variant='h4'>{t("SchoolDetail.Characteristics")}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{textAlign:'center'}}>
                        {school?.characteristics?.beginners &&
                            <div className='school-detail__accordion__content'>
                                <ChildCareIcon sx={{ fontSize: 60 }}></ChildCareIcon>
                                <Typography>{t("SchoolDetail.Beginner")}</Typography>
                                <Divider sx={{ padding: '10px', width: '70%', borderBottomWidth: 2, }} />                            </div>}
                        {school?.characteristics?.wifi &&
                            <div className='school-detail__accordion__content'>
                                <WifiIcon sx={{ fontSize: 60 }}></WifiIcon>
                                <Typography>{t("SchoolDetail.Wifi")}</Typography>
                                <Divider sx={{ padding: '10px', width: '70%', borderBottomWidth: 2, }} />
                            </div>}
                        {school?.characteristics?.jobSuport &&
                            <div className='school-detail__accordion__content'>
                                <WorkIcon sx={{ fontSize: 60 }}></WorkIcon>
                                <Typography>{t("SchoolDetail.Support")}</Typography>
                                <Divider sx={{ padding: '10px', width: '70%', borderBottomWidth: 2, }} />
                            </div>}
                        {school?.characteristics?.cafeteria &&
                            <div className='school-detail__accordion__content'>
                                <LocalCafeIcon sx={{ fontSize: 60 }}></LocalCafeIcon>
                                <Typography>{t("SchoolDetail.Cafeteria")}</Typography>
                            </div>}

                    </AccordionDetails>
                </Accordion>
            </div>
            <Divider sx={{ padding: '10px', width: '40%', borderBottomWidth: 2, }} />
                             
            <Typography variant='h2'>{t("Header.Accommodation")}</Typography>
            <Typography sx={{marginLeft:'1rem',marginRight:'1rem'}}>{t("SchoolDetail.Accommodation")}</Typography>
            {school && <AccommodationMap school={school} lat={school?.lat} lon={school?.lon} data={accommodations}></AccommodationMap>}
            <Divider sx={{ padding: '10px', width: '40%', borderBottomWidth: 2, }} />

            <Typography sx={{marginLeft:'1rem',marginRight:'1rem'}} variant='h4'>{t("SchoolDetail.MoreInfo")}</Typography>
            <Paper sx={{ width: {xs: '100%', md:'70%'}, textAlign: 'center', display: 'flex', justifyContent: 'center', padding: 2 }} elevation={10}>
                <form className='login-form more-info-form'  onSubmit={handleInfoSubmit}>
                    <div className='avatar-container'>
                        <Typography></Typography>
                    </div>
                    <h2 className='info-form__h2-english'>I want more Info!</h2>
                    <h2 className='info-form__h2-japanese'>情報をもっと欲しい！</h2>
                    <TextField required type='email' name='email' label={t("Register.Email")} variant="outlined" />
                    <TextField required type='text' name='name' label={t("SchoolDetail.NameLabel")} variant="outlined" />
                    <div>
                        <input name='gender' value='male' type='radio' id='male' />
                        <label id='male' htmlFor='male'>{t("SchoolDetail.Male")}</label>
                    </div>
                    <div>
                        <input name='gender' value='female' type='radio' id='female' />
                        <label id='female' htmlFor='female'>{t("SchoolDetail.Female")}</label>
                    </div>
                    <TextField name='age' type='number' InputProps={{ inputProps: { min: 18, max: 100 } }} label={t("SchoolDetail.Age")} ></TextField>
                    <textarea name='userComment' style={{minWidth:'200px', minHeight:'100px'}} placeholder={t("SchoolDetail.AddInfo")} ></textarea>
                    {infoSentMessage}
                    <Button variant='contained' type='submit' color='primary'>{t('SchoolDetail.Send')}</Button>

                </form>
            </Paper>
        </Grid>
    )
}