import { Button, Typography } from "@mui/material"
import accommodationCardImg from '../../../img/home-accommodation-card.jpg';
import { useTranslation } from "react-i18next";
import { useHistory } from 'react-router-dom';

export default function AccommodationCard() {

    const [t] = useTranslation('global');
    const history = useHistory();

    return (
        <div className='home__info-card'>
            <div className='home__info-card__img-div school__card'>
                <img className='home__info-card__img school__card__img' src={accommodationCardImg} alt="" />
                <div className='home__info-card__background school__card__background'></div>
                <Typography variant='h5' color='common.white' sx={{ position: 'absolute' }}>{t("Home.FirstStep.AccommodationCard.Title")}</Typography>
            </div>
            <Button onClick={
                (e)=>{history.push('/accommodation')}
            } variant='contained'>{t("Home.FirstStep.AccommodationCard.Button")}</Button>
        </div>
    )
}