import { Button, Typography } from "@mui/material"
import schoolCard from '../../../img/home-school-card.jpg';
import { useTranslation } from "react-i18next";

export default function SchoolCard() {

    const [t, i18n] = useTranslation('global');

    return (
        <div className='home__info-card'>
        <div className='home__info-card__img-div school__card'>
            <img className='home__info-card__img school__card__img' src={schoolCard} alt="" />
            <div className='home__info-card__background school__card__background'></div>
            <Typography variant='h5' color='common.white' sx={{ position: 'absolute' }}>{t("Home.FirstStep.SchoolCard.Title")}</Typography>
        </div>
        <Button variant='contained'>{t("Home.FirstStep.SchoolCard.Button")}</Button>
        </div>
    )
}