import { Button, Typography } from "@mui/material"
import schoolCard from '../../../img/home-school-card.jpg';
import { useTranslation } from "react-i18next";
import { useHistory } from 'react-router-dom';


export default function SchoolCard() {

    const [t] = useTranslation('global');
    const history = useHistory();

    return (
        <div className='home__info-card'>
        <div className='home__info-card__img-div school__card'>
            <img className='home__info-card__img school__card__img' src={schoolCard} alt="" />
            <div className='home__info-card__background school__card__background'></div>
            <Typography variant='h5' color='common.white' sx={{ position: 'absolute' }}>{t("Home.FirstStep.SchoolCard.Title")}</Typography>
        </div>
        <Button onClick={
            (e)=> {history.push('/schools')}
        } variant='contained'>{t("Home.FirstStep.SchoolCard.Button")}</Button>
        </div>
    )
}