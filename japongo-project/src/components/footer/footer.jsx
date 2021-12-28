import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './footer.css'


export default function Footer() {

    const [t] = useTranslation('global')

    return (
        <footer className='footer'>
            <nav className="footer-nav">
                <ul className="footer-ul">
                    <li>
                        <Typography color='textPrimary'><Link to='/legal'>{t("Header.Legal")}</Link></Typography>
                   </li>
                    <li>
                        <Typography color='textPrimary'><Link to='/privacy-policy'>{t("Header.PrivacyPolicy")}</Link></Typography>
                    </li>
                </ul>

            </nav>
            <div>
            <Typography variant='h3' sx={{ color: 'white', paddingBottom:'1rem' }}>Copyright</Typography>
            </div>
        </footer>
    )
}