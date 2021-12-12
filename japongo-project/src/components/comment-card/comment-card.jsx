import { Typography, Box, Divider } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from "react";
import { UserContext } from "../../context/user-context/user-context";

export default function CommentCard(props){
    
    const [userData] = useContext(UserContext);

    const onCommentDelete = (e)=>{
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


    return(
        <Box component='div' 
        sx={{
            display:'flex',
            flexDirection:'column',
            maxWidth:'500px',
            marginTop:'1rem'
            }}>
            <Typography variant="h5">{props.data?.name}</Typography>
            <Typography variant="body" sx={{opacity:0.7}}>{props.data?.comment}</Typography>
            {props.data?.name===userData.name && <DeleteIcon onClick={onCommentDelete}></DeleteIcon>}

            <Divider />
        </Box>
    )
}