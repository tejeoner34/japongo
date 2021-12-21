import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { serverUrl } from "../global/global-variable";
import './style.css';



export default function CourseCard2(props){

    const history = useHistory();

    const handleClick = (e)=>{
        history.push(`/course/${props.data._id}`)
    }
    
    const [t] = useTranslation('global');

    return(
        
        
            <div className='course-card__container' onClick={handleClick}>
                <div className='course-card__img-container'>
                    <img src={serverUrl + `/courses/${props.data.img}`} alt={props.data.description} />
                </div>
                <div className='course-card__info-container'>
                    <Typography onClick={handleClick} variant='h4'>{props.data?.name}</Typography>
                    <Typography variant='body'>{props.data.description}</Typography>
                    <Typography variant='body'>{props.data.duration}</Typography>
                    <Typography className='course-card__level' variant='body'>{t("CoursesPage.SearchBar.Level")}: {props.data.level}</Typography>

                </div>
            </div>
      
    )
}