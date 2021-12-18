import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { serverUrl } from '../../global/global-variable.js'
import './review-card.css'


export default function ReviewCard(props) {

  const styleBackground = {
    backgroundImage: `url("${serverUrl}/review-avatar/${props.data?.img}")`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '140px',
    width: '140px',
    borderRadius:'50%'
  };


  return (
    <Card className='review-card' sx={{ maxWidth: 345, minWidth: 270 }}>

      
        <Box display={'flex'} justifyContent={'center'}>
        {props.data && <div style={styleBackground}>

        </div>}
        </Box>
        {/* {props.data&&<CardMedia
          component="img"
          height="140"
          image={serverUrl+`/review-avatar/${props.data?.img}`}
          alt={props.data?.img}
        />} */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.data.body}
          </Typography>
        </CardContent>
     
    </Card>
  );
}