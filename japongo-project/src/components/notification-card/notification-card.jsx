import { Box, Typography } from "@mui/material";


export default function NotificationCard(props){

    const onNotificationDelete = (e)=>{
        const options = {
            method: "PATCH",
            headers: {
              "Content-type": "application/json", 
            },
            body: JSON.stringify({
              name: sessionStorage.getItem('name')??localStorage.getItem('name'), 
              course: props?.data
            }),
          };

          fetch('http://localhost:4567/mentions/', options)
          .then(r=>r.json())
          .then(d=> props.onNotificationDelete(d.mentions))


    }

    return(
        <Box onClick={onNotificationDelete}>
            <Typography><b>{props?.data?.from}</b>: {props?.data?.comment?.substring(0,10)}...</Typography>
        </Box>
    )
}