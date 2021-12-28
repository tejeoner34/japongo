import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import Login from "../login-page/login-page";
import { useTranslation } from 'react-i18next';
import { serverFetch } from "../../global/global-variable";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ValidateEmail() {

  const [t] = useTranslation('global');
  const query = useQuery(); 
  const [isLoading, setLoading] = useState(true); 
  const [isEmailValid, setEmailValidity] = useState(false); 
  const token = query.get("token");
  useEffect(() => {
    if (token) {
      fetch(`${serverFetch}auth/validate?token=${token}`) 
        .then((r) => {
          setLoading(false); 
          if (!r.ok) throw new Error("No se ha validado correctamente");
          setEmailValidity(true); 
        })
        .catch((err) => setEmailValidity(false)); 
    } else {
      setLoading(false); 
      setEmailValidity(false); 
    }
  },[token]);

  return (
    <React.Fragment>
      {isLoading ? (
        <h1>{t('Validation.Loading')}</h1>
      ) : isEmailValid ? (
        <React.Fragment>
          <h1>{t('Validation.Ok')}</h1>
          <Login></Login>
        </React.Fragment>
      ) : (
        <h1>{t('validation.Error')}</h1>
      )}
    </React.Fragment>
  );
}

export default ValidateEmail;