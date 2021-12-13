import { Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import WifiIcon from '@mui/icons-material/Wifi';
import WorkIcon from '@mui/icons-material/Work';


export default function SchoolsCard(props){

    const [t] = useTranslation('global');

    return(
        <div className="school-card">
            <div className="school-card__background-container">
                <img src="" alt="" />
                <div className="school-card__background"></div>
            </div>
        <div className="school-card__info">
            <Typography>{props.data?.name}</Typography>
            <Typography>{t("Schools.Card.Intensity")}: {props.data?.intensity}</Typography>
            {props.data?.characteristics.cafeteria && <Typography><LocalCafeIcon></LocalCafeIcon> {t("Schools.Card.Cafeteria")}</Typography>}
            {props.data?.characteristics.wifi && <Typography><WifiIcon></WifiIcon> {t("Schools.Card.Wifi")}</Typography>}
            {props.data?.characteristics.jobSuport && <Typography><WorkIcon></WorkIcon> {t("Schools.Card.JobSupport")}</Typography>}
            <Button>{t("Schools.Card.Button")}</Button>
        </div>
        </div>
    )
}