import { Box, Typography } from "@mui/material";


export default function NotificationCard(props){

    return(
        <Box>
            <Typography>{props?.data?.from}</Typography>
            <Typography>holaaaa</Typography>
        </Box>
    )
}