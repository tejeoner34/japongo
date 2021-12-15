import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {serverUrl} from '../../global/global-variable.js'
import './review-card.css'

export default function ReviewCard(props) {
  return (
    <Card className='review-card' sx={{ maxWidth: 345, minWidth: 270 }}>
      <CardActionArea>
        {props.data&&<CardMedia
          component="img"
          height="140"
          image={serverUrl+`/review-avatar/${props.data?.img}`}
          alt={props.data?.img}
        />}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.data.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}