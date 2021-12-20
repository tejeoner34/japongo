import { Typography, Box, Divider } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { serverUrl } from "../../global/global-variable";


export default function CommentCard(props) {

  // const [userData] = useContext(UserContext);

  const onCommentDelete = (e) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: sessionStorage.getItem('name'),
        comment: props?.data
      }),
    };
    fetch(`http://localhost:4567/courses/course?id=${props?.id}`, options)
      .then(r => r.json())
      .then(d => props.onDeleteComment(d));
  }


  const styleAvatar = {
    backgroundImage: `url("${serverUrl}/user-avatar/${props?.data?.img}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '80px',
    width: '80px',
    minWidth:'80px',
    borderRadius: '50%'
  };

  return (
    <Box component='div'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '500px',
        marginTop: '1rem'
      }}>

      <Box
        display='flex'
        justifyContent='space-between'
      >
        <Box 
        display='flex'
        gap='1rem'>
        {props?.data?.img !== undefined && <div style={styleAvatar}>
        </div>}
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={1.5}>
          <Typography variant="h5">{props.data?.name}</Typography>
          <Typography variant="body" sx={{ opacity: 0.7 }}>{props.data?.comment}</Typography>
        </Box>
        </Box>
        <Box>
          {props.data?.name === sessionStorage.getItem('name') && <span title="delete"><DeleteIcon sx={{ cursor: 'pointer' }} onClick={onCommentDelete}></DeleteIcon></span>}
        </Box>
      </Box>
      <Divider />
    </Box>
  )
}