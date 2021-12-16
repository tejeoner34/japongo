import { Grid, Typography, Button, Box } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import OnlineCoursesBanner from '../../img/online-courses-banner.jpg';
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import CourseCard2 from "../../courses-card2/courses-card";
import './style.css'

export default function CoursesPage() {
    const [t] = useTranslation('global');
    const [isLoad, setIsLoad] = useState(false)
    const [courses, setCourses] = useState([]);
    const [courseOriginal, setCoursesOriginal] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:4567/courses/')
            .then(r => r.json())
            .then(d => {
                setCourses(oldvalue => oldvalue.concat(d));
                setCoursesOriginal(oldvalue => {
                    oldvalue.concat(d);
                    setIsLoad(true);
                });
            })
    }, []);

    


    // const [value, setValue] = useState(0);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = e.target.course.value.toLowerCase();
        const filtered = courseOriginal.filter(e => e.name.toLowerCase().includes(data))
        setCourses(filtered)

    }


    return (
        <Grid item container justifyContent='center' flexDirection='column' alignItems='center' rowGap={3}>
            <div style={{maxHeight:'300px'}} className='home__banner'>
                <img className='home__banner__img' src={OnlineCoursesBanner} alt="" />
                <div className='home__banner__background'></div>
                <Typography variant='h1' color='common.white' sx={{ position: 'absolute' }}>{t("CoursesPage.Banner")}</Typography>
            </div>

            <form onSubmit={handleSubmit} className='courses__search-bar'>
                <input name='course' className='courses__search-bar__input' type="text" />
                <Button type='submit' variant='contained'>{t("CoursesPage.SearchBar.Button")}</Button>
            </form>


            {
                isLoad ?
                    (
                        <Box 
                        display={'flex'}
                        flexDirection={'column'}
                        gap={3}>
                            {courses?.map((e, i) => <CourseCard2 key={i} data={e}></CourseCard2>)}
                        </Box>
                    
                    )
                    :
                    (
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                    )
            }


            {/* <Box sx={{ maxWidth: 450, bgcolor: 'background.paper', overflow:'auto' }}>
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
            </Box> */}
        </Grid>
    )
}