import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ReactPlayer from 'react-player';
import { TextField, Button, Grid, Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';



export default function CourseDetailPage() {

    const { id } = useParams();
    const [course, updateCourse] = useState({});
    const [t] = useTranslation('global');

    useEffect(() => {
        fetch(`http://localhost:4567/courses/course?id=${id}`)
            .then(r => r.json())
            .then(d => updateCourse({ ...d }))
    });

    

    return (
        <Grid container justifyContent='center' flexDirection='column' alignItems='center' rowGap={3}>
            <ReactPlayer width='60%' url={`https://www.youtube.com/watch?v=${course?.video}`} />
            <Box
            component='div'
            sx={{
                width:'80%',
                display:'flex',
                flexDirection:'column'
            }}
            >
                <Typography variant='h1'>{course?.name}</Typography>
                <Typography variant='h5' sx={{opacity:0.7}}>{course?.description}</Typography>
                <Typography variant='body'>{t("CoursePage.Info.Duration")}: {course?.duration}</Typography>
                <Typography variant='body'>{t("CoursesPage.SearchBar.Level")}: {course?.level}</Typography>


            </Box>
            <form className='course-detail__form'>
                <TextField id="comment" name='comment' required type='textarea' label={t("CoursePage.Comment.PlaceHolder")} variant="outlined" />
                <Button variant='contained' type='submit' color='primary'>{t('CoursePage.Comment.Button')}</Button>
            </form>

        </Grid>
    )
}