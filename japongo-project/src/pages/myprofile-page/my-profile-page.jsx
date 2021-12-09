import { useTranslation } from "react-i18next";

export default function MyProfile(){

    const [t] = useTranslation('global');

    return(
        <h1>{t("Profile.Hello")} {sessionStorage.getItem('name')}</h1>
    )
}