import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import ReactPlayer from 'react-player/youtube';
import { TextField, Button, Grid, Box, Typography, Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import CommentCard from '../../components/comment-card/comment-card';
import './course-detail-page.css';
import CircularProgress from '@mui/material/CircularProgress';
import { UserContext } from '../../context/user-context/user-context';
import { serverFetch } from '../../global/global-variable.js'


export default function CourseDetailPage() {

  const { id } = useParams();
  const [course, updateCourse] = useState({});
  const [control, updateControl] = useState(null);
  const [inputValue, updateInputValue] = useState('');
  const [t] = useTranslation('global');
  const [isAdd, setIsAdd] = useState(true);
  const [isLoad, setIsLoad] = useState(false);
  const [userData] = useContext(UserContext);

  useEffect(() => {
    fetch(`${serverFetch}courses/course?id=${id}`)
      .then(r => r.json())
      .then(d => {
        updateCourse({ ...d })
        updateControl(true)
        setIsLoad(true)
      })
  }, [id]);

  const onCommentPost = (e) => {
    e.preventDefault();
    let comment = e.target.comment.value;
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: sessionStorage.getItem('name') ?? localStorage.getItem('name'),
        comment: comment,
        img: userData?.file.url
      }),
    };
    fetch(`${serverFetch}courses/course?id=${id}`, options)
      .then(r => r.json())
      .then(d => updateCourse({ ...d }));
    document.getElementById("create-course-form").reset();
    updateInputValue('');
    const splited = comment.split(' ')
    const finded = splited.find(e => e.includes('@'))
    if (finded !== undefined) {
      const name = finded.split('@')[1];
      const options2 = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          mention: {
            course: id,
            comment: comment,
            from: sessionStorage.getItem('name') ?? localStorage.getItem('name')
          },
        }),
      };
      fetch(`${serverFetch}mentions/`, options2)
        .then(r => r.json())
    }
  };

  const onDeleteComment = (childata) => {
    updateCourse({ ...childata })
  }

  const onFavAdd = (e) => {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: sessionStorage.getItem('mail') ?? localStorage.getItem('mail'),
        course: course
      }),
    };
    fetch(`${serverFetch}user/fav`, options)
      .then(r => {
        if (r.ok) setIsAdd(false)
        if(!r.ok) setIsAdd(true)
        return r.json()
      })
      .catch(err => console.log(err))
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setTimeout(() => setOpen(true), 1500);
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

  const style = {
    maxwidth: '600px',
  }

  return (
    <Grid item container justifyContent='center' flexDirection='column' alignItems='center' rowGap={4}>
      {
        !isLoad ?
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
          :
          (
            <Grid item container xs={12} justifyContent={'center'} rowGap={4} sx={{ marginTop: '1rem' }} >
              <Box xs={12} width={'100%'} maxwidth='600px'>
                {control && <ReactPlayer style={style} width='100%' url={`https://www.youtube.com/watch?v=${course?.video}`}
                  config={{ youtube: { playerVars: { origin: 'https://www.youtube.com' } } }} />}
              </Box>
              <Box
                component='div'
                width='80%'
                display='flex'
                flexDirection='column'
              >
                <Typography variant='h1' fontWeight={600}>{course.name}</Typography>
                <Typography variant='h5' sx={{ opacity: 0.7 }}>{course.description}</Typography>
                <Typography variant='body'>{t("CoursePage.Info.Duration")}: {course.duration}</Typography>
                <Typography variant='body'>{t("CoursesPage.SearchBar.Level")}: {course.level}</Typography>
                <Button onClick={(e) => { onFavAdd(); handleClick() }}>{t("CoursePage.Info.Button")}</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={3000}
                  onClose={handleClose}
                  message={isAdd ? (t("CoursePage.Info.NotAddedMessage")) : (t("CoursePage.Info.AddedMessage"))}
                  action={action}
                />
              </Box>
              <Box component='div'
                width='80%'
                display='flex'
                flexDirection='column'
              >
                <Typography variant='h3' sx={{ marginBottom: '1rem' }} fontWeight={600}>{t("CoursePage.Info.Comment")}</Typography>
                <Typography sx={{opacity:'0.7'}}>You can mention some other user by typing "@" and the username. For example: "@userName hello mention"</Typography>
                {course.comments?.map((e, i) => <CommentCard key={i} data={e} id={id} onDeleteComment={onDeleteComment}></CommentCard>)}
              </Box>
              <form id="create-course-form" onSubmit={onCommentPost} className='course-detail__form'>
                <TextField onChange={(e) => updateInputValue(e.target.value)}
                  inputProps={{ style: { fontSize: 16 } }} sx={{ width: '100%' }}
                  id="comment" name='comment' required type='textarea'
                  label={t("CoursePage.Comment.PlaceHolder")} variant="outlined" />
                <Button disabled={inputValue === '' ? true : false}
                  variant='contained' type='submit' color='primary'>{t('CoursePage.Comment.Button')}</Button>
              </form>
            </Grid>
          )

      }


    </Grid>
  )
}