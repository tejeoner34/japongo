
import { Typography, Button } from "@mui/material";
import { useHistory } from "react-router";
import './favorite-card.css';
import { useTranslation } from "react-i18next";



export default function FavoriteCard(props){

    const history = useHistory();
    const [t] = useTranslation('global')

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
              email: sessionStorage.getItem('mail')??localStorage.getItem('mail'), 
              course: props.data
            }),
          };
        fetch('http://localhost:4567/user/fav', options)
          .then(r=>r.json())
          .then(d=> {
            props.onFavRemove(d)})
    }
    
    return(
        
            <div className='favorite-card'>
                <div className='favorite-card__img-container'>
                    <img src={props.data.img} alt={props.data.description} />
                </div>
                <div className='favorite-card__info-container'>
                    <Typography sx={{cursor:'pointer'}} onClick={handleClick} variant='h4'>{props.data.name}</Typography>
                    <Typography variant='body'>{props.data.description}</Typography>
                    <Button onClick={handleRemove}>{t("Profile.RemoveFav")}</Button>
                </div>
            </div>
      
    )
}