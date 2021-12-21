import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function CoursesCard(props) {
    return (
        <Card sx={{
            minWidth: 275,
            height: '300px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin:'10px'
        }}>
            <CardContent sx={{
                padding:'10px',
                width:'80%'
            }}>
                <Typography variant="h5" component="div">
                    {props.data.name}
                </Typography>
                <Typography variant="body2">
                    {props.data.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}