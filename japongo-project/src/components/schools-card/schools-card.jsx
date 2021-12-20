import { Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import WifiIcon from '@mui/icons-material/Wifi';
import WorkIcon from '@mui/icons-material/Work';
import { useHistory } from "react-router-dom";
import './schools-card.css'
import { serverUrl } from "../../global/global-variable";



export default function SchoolsCard(props){

    const history = useHistory();
    const [t] = useTranslation('global');

 
    return(
        <div className="school-card">
            <div className="school-card__background-container">
                <img src={serverUrl+`/school/${props.data?.img.card}`} alt={props.data?.img.card} />
                <div className="school-card__background"></div>
            </div>
        <div  className="school-card__info">
            <Typography sx={{fontSize:'1.7rem'}} >{props.data?.name}</Typography>
            <Typography sx={{fontSize:'1.3rem'}}>{t("Schools.Card.Intensity")}: {props.data?.intensity}</Typography>
            {props.data?.characteristics.cafeteria && <Typography sx={{fontSize:'1.3rem'}}><LocalCafeIcon></LocalCafeIcon> {t("Schools.Card.Cafeteria")}</Typography>}
            {props.data?.characteristics.wifi && <Typography sx={{fontSize:'1.3rem'}}><WifiIcon></WifiIcon> {t("Schools.Card.Wifi")}</Typography>}
            {props.data?.characteristics.jobSuport && <Typography sx={{fontSize:'1.3rem'}}><WorkIcon></WorkIcon> {t("Schools.Card.JobSupport")}</Typography>}
            <Button variant='outlined' sx={{color:'white', borderColor:'white', maxWidth:'250px'}} onClick={()=>history.push(`/school/${props.data?._id}`)}>{t("Schools.Card.Button")}</Button>
        </div>
        </div>
    )
}