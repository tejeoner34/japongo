import { Grid, Typography, Box, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import TokyoMap from '../../components/map-component/map-component.jsx';
import SchoolsCard from '../../components/schools-card/schools-card.jsx';
import backgorund from '../../img/home-background.jpg';
import { useTranslation } from 'react-i18next';


function EscuelasPage() {

    const [schools, updateSchools] = useState(null);
    const [t] = useTranslation('global');
    const tokyoLat = 35.68138269737581;
    const tokyoLon = 139.7684809508418;

    useEffect(() => {
        fetch('http://localhost:4567/schools')
            .then(r => r.json())
            .then(d => updateSchools(d))
    }, [])

    return (
        <Grid item container justifyContent='center' flexDirection='column' alignItems='center' rowGap={3}>
            <div className='home__banner' style={{ maxHeight: '300px' }}>
                <img className='home__banner__img' src={backgorund} alt="" />
                <div className='home__banner__background'></div>
                <Typography variant='h1' color='common.white' sx={{ position: 'absolute' }}>{t("Schools.Title")}</Typography>
            </div>
            <Typography variant='h2'>{t("Schools.TokyoName")}</Typography>
            <Typography sx={{ maxWidth: '600px' }}>{t("Schools.TokyoDescription")}</Typography>
            <Divider sx={{ padding: '10px', width: '40%', borderBottomWidth: 2, }} />
            <Typography variant='h2'>{t("Schools.Location")}</Typography>

            {schools && <TokyoMap lat={tokyoLat} lon={tokyoLon} data={schools}></TokyoMap>}
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