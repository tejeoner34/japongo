import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import ReactPlayer from 'react-player';
import { TextField, Button, Grid, Box, Typography, Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import CommentCard from '../../components/comment-card/comment-card';
import './course-detail-page.css';
import { UserContext } from '../../context/user-context/user-context';



export default function CourseDetailPage() {

  const { id } = useParams();
  const [course, updateCourse] = useState({});
  const [t] = useTranslation('global');
  const [, updateUserData] = useContext(UserContext);
  const [isAdd, setIsAdd] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4567/courses/course?id=${id}`)
      .then(r => r.json())
      .then(d => updateCourse({ ...d }))
  },);

  const onCommentPost = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: sessionStorage.getItem('name'),
        comment: comment
      }),
    };
    fetch(`http://localhost:4567/courses/course?id=${id}`, options)
      .then(r => r.json())
      .then(d => updateCourse({ ...d }));
  };

  const onDeleteComment = (childata)=>{
    updateCourse({...childata})
  }

  const onFavAdd = (e) => {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: sessionStorage.getItem('mail'),
        course: course
      }),
    };
    fetch(`http://localhost:4567/user/fav`, options)
      .then(r => r.json())
      .then(d => {
        setIsAdd(false);
        updateUserData({ ...d })})
      .catch(err => console.log(err))
  };


  
    const [open, setOpen] = useState(false);
  
    const handleClick = () => {
      setTimeout(()=>setOpen(true),1000)
      ;
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    const action = (
      <React.Fragment>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );



  return (
    <Grid container justifyContent='center' flexDirection='column' alignItems='center' rowGap={4}>
      <ReactPlayer width='60%' maxwidth='600px' url={`https://www.youtube.com/watch?v=${course?.video}`} />
      <Box
        component='div'
        sx={{
          width: '80%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography variant='h1' fontWeight={600}>{course?.name}</Typography>
        <Typography variant='h5' sx={{ opacity: 0.7 }}>{course?.description}</Typography>
        <Typography variant='body'>{t("CoursePage.Info.Duration")}: {course?.duration}</Typography>
        <Typography variant='body'>{t("CoursesPage.SearchBar.Level")}: {course?.level}</Typography>
        <Button onClick={(e)=>{onFavAdd();handleClick()}}>{t("CoursePage.Info.Button")}</Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message={isAdd?(t("CoursePage.Info.NotAddedMessage")) :(t("CoursePage.Info.AddedMessage"))}
          action={action}
        />
      </Box>
      <Box component='div'
        sx={{
          width: '80%',
          display: 'flex',
          flexDirection: 'column'
        }}>
        <Typography variant='h3' sx={{ marginBottom: '1rem' }} fontWeight={600}>{t("CoursePage.Info.Comment")}</Typography>
        {course.comments?.map((e, i) => <CommentCard key={i} data={e} id={id} onDeleteComment={onDeleteComment}></CommentCard>)}
      </Box>
      <form onSubmit={onCommentPost} className='course-detail__form'>
        <TextField inputProps={{ style: { fontSize: 16 } }} sx={{ width: '100%' }} id="comment" name='comment' required type='textarea' label={t("CoursePage.Comment.PlaceHolder")} variant="outlined" />
        <Button variant='contained' type='submit' color='primary'>{t('CoursePage.Comment.Button')}</Button>
      </form>

    </Grid>
  )
}