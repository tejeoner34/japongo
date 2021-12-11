
import { Typography, Button } from "@mui/material";
import { useHistory } from "react-router";
import './favorite-card.css';



export default function FavoriteCard(props){

    const history = useHistory();

    const handleClick = (e)=>{
        history.push(`/course/${props.data?._id}`)
    };

    const handleRemove= (e)=>{
        const options = {
            method: "PATCH",
            headers: {
              "Content-type": "application/json", 
            },
            body: JSON.stringify({
              email: sessionStorage.getItem('mail'), 
              course: props.data
            }),
          };
        fetch('http://localhost:4567/user/fav', options)
          .then(r=>r.json())
          .then(d=> {
            console.log(d)
            props.onFavRemove(d)})
    }
    
    return(
        
            <div className='favorite-card'>
                <div className='favorite-card__img-container'>
                    <img src={props.data?.img} alt={props.data?.description} />
                </div>
                <div className='favorite-card__info-container'>
                    <Typography onClick={handleClick} variant='h4'>{props.data?.name}</Typography>
                    <Typography variant='body'>{props.data?.description}</Typography>
                    <Button onClick={handleRemove}>Remove</Button>
                </div>
            </div>
      
    )
}