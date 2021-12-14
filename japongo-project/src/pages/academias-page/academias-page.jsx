import { Grid, Typography, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import TokyoMap from '../../components/map-component/map-component.jsx';
import SchoolsCard from '../../components/schools-card/schools-card.jsx';
import backgorund from '../../img/home-background.jpg';
import { useTranslation } from 'react-i18next';


function EscuelasPage() {

    const [schools, updateSchools] = useState([]);
    const [t] = useTranslation('global');

    useEffect(() => {
        fetch('http://localhost:4567/schools')
            .then(r => r.json())
            .then(d => updateSchools(oldvalue => oldvalue.concat(d)))
    }, [])

    return (
        <Grid container item xs={12} md={5} direction="column"
            alignItems="center"
            justifyContent="center"
            rowGap={3}>
            <div className='home__banner'>
                <img className='home__banner__img' src={backgorund} alt="" />
                <div className='home__banner__background'></div>
                <Typography variant='h1' color='common.white' sx={{ position: 'absolute' }}>{t("Schools.Title")}</Typography>
            </div>
            <TokyoMap data={schools}></TokyoMap>
            <Box component='div'
            display='flex'
            flexWrap='wrap'
            gap={2}
            justifyContent='center'>
                {schools?.map((s, i) => <SchoolsCard key={i} data={s}></SchoolsCard>)}
            </Box>


        </Grid>

    )
}

export default EscuelasPage;