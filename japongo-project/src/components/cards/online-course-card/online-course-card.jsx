import { Button, Typography } from "@mui/material"
import onlineCourseImg from '../../../img/home-online-card.jpg';
import { useTranslation } from "react-i18next";
import { useHistory } from 'react-router-dom';



export default function OnlineCourseCard() {

    const [t] = useTranslation('global');
    const history = useHistory();

    return (
        <div className='home__info-card' onClick={() => history.push('/courses')}>
            <div className='home__info-card__img-div school__card'>
                <img className='home__info-card__img school__card__img' src={onlineCourseImg} alt="" />
                <div className='home__info-card__background school__card__background'></div>
                <Typography variant='h5' color='common.white' sx={{ position: 'absolute' }}>
                    {t("Home.FirstStep.OnlineCourseCard.Title")}
                </Typography>
            </div>
            <Button onClick={
                (e) => { history.push('/online-courses') }
            } variant='contained'>{t("Home.FirstStep.OnlineCourseCard.Button")}</Button>
        </div>
    )
}