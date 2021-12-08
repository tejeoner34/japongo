import { Grid, Typography } from "@mui/material";
import OnlineCoursesBanner from '../../img/online-courses-banner.jpg';
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CoursesCard from "../../components/courses-card/courses-card";

export default function CoursesPage() {
    const [t] = useTranslation('global');
    useEffect(() => {
        fetch('http://localhost:4567/courses/')
            .then(r => r.json())
            .then(d => {
                console.log(d)
                setCourses(oldvalue => oldvalue.concat(d))
            })
    }, []);

    const [courses, setCourses] = useState([]);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Grid item container justifyContent='center' flexDirection='column' alignItems='center' rowGap={3}>
            <div className='home__banner'>
                <img className='home__banner__img' src={OnlineCoursesBanner} alt="" />
                <div className='home__banner__background'></div>
                <Typography variant='h1' color='common.white' sx={{ position: 'absolute' }}>{t("CoursesPage.Banner")}</Typography>
            </div>
            <Box sx={{ maxWidth: 450, bgcolor: 'background.paper', overflow:'auto' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    sx={{
                       
                    }}
                >
                    {courses?.map((e,i)=> <CoursesCard key={i} data={e}/>)}
                </Tabs>
            </Box>
        </Grid>
    )
}